const chai = require("./chaiSetup");
const hre = require("hardhat");
const { singletons } = require('@openzeppelin/test-helpers');
require('@openzeppelin/test-helpers/configure')


const { expect } = chai;

describe('SwayamCodesToken Contract', () => {
  let owner, addr1, addr2;
  let swayamCodesTokenInstance;

  const INITIAL_SUPPLY = hre.ethers.utils.parseEther("1000");

  before(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    await singletons.ERC1820Registry(owner.address)    // ERC1820 registery is required in case of ganache or local blockchain and ERC-777, not need with testnet or mainnet
    await singletons.ERC1820Registry(addr1.address)
    const SwayamCodesToken = await hre.ethers.getContractFactory("SwayamCodesToken");
    swayamCodesTokenInstance = await SwayamCodesToken.deploy(INITIAL_SUPPLY);
    await swayamCodesTokenInstance.deployed();
  })

  it('owner tokens should be equal to initial suuply', async () => {
    expect(swayamCodesTokenInstance.balanceOf(owner.address)).to.eventually.be.equal(INITIAL_SUPPLY);
  });

  it("owner should be able to send tokens to other acconts", async () => {
    const tokens = hre.ethers.utils.parseEther("10");
    await expect(swayamCodesTokenInstance.transfer(addr1.address, tokens)).to.eventually.be.fulfilled;
    expect(swayamCodesTokenInstance.balanceOf(owner.address)).to.eventually.be.equal(INITIAL_SUPPLY.sub(tokens));
    expect(swayamCodesTokenInstance.balanceOf(addr1.address)).to.eventually.be.equal(tokens);
    // console.log(await swayamCodesTokenInstance.balanceOf(addr1.address))
  })

  it("no one except owner should be able to transfer tokens", async () => {
    const tokens = hre.ethers.utils.parseEther("5");
    await expect(swayamCodesTokenInstance.connect(addr1).transfer(addr2.address, tokens)).to.eventually.be.rejectedWith("Only Owner can transfer tokens");
  })
  
});