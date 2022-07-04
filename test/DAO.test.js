const chai = require("./chaiSetup");
const hre = require("hardhat");
const { singletons, time } = require('@openzeppelin/test-helpers');
require('@openzeppelin/test-helpers/configure')


const { expect } = chai;

describe('DAO Contract', () => {
  let deployer, addr1, addr2, addr3;
  let daoInstance;

  before(async () => {
    [deployer, addr1, addr2, addr3] = await ethers.getSigners();
    await singletons.ERC1820Registry(deployer.address)    // ERC1820 registery is required in case of ganache or local blockchain and ERC-777, not need with testnet or mainnet
    await singletons.ERC1820Registry(addr1.address)
    const SwayamCodesToken = await hre.ethers.getContractFactory("SwayamCodesToken");
    const swayamCodesToken = await SwayamCodesToken.deploy(hre.ethers.utils.parseEther("1000"));

    await swayamCodesToken.connect(deployer).transfer(addr1.address, hre.ethers.utils.parseEther("1"))

    const DAO = await hre.ethers.getContractFactory("DAO");
    daoInstance = await DAO.deploy(swayamCodesToken.address);
      
  })

  it('addr1 should be able to create proposal', async () => {
    await expect(daoInstance.connect(addr1).createProposal("will Portugal win FIFA 2022?", [addr2.address, addr3.address])).to.eventually.be.fulfilled;
    await expect(daoInstance.proposalsCount()).to.eventually.be.equal("1");
  });

  it('addr2 and addr3 should be able to cast vote on proposal 1', async () => {
    await expect(daoInstance.connect(addr2).castVote("1", true)).to.eventually.be.fulfilled;
    await expect(daoInstance.connect(addr3).castVote("1", true)).to.eventually.be.fulfilled;
    const proposal = await daoInstance.proposals("1");
    expect(proposal.votesUp).to.equal("2");
  })
  
  it('should give error for duplicate vote', async () => {
    await expect(daoInstance.connect(addr2).castVote("1", true)).to.eventually.be.rejectedWith("You have already voted on this proposal");
  });

  it('addr2 should not be able to create proposal', async () => {
    await expect(daoInstance.connect(addr2).createProposal("will Portugal win FIFA 2022?", [addr2.address, addr3.address])).to.eventually.be.rejectedWith("You are not eligible to create a proposal");
  });

  it("countVotes should be rejected because deadline not passed yet", async () => {
    await expect(daoInstance.countVotes(1)).to.eventually.be.rejectedWith("Deadline is not passed yet");
  })

  it("should mine the 100 new blocks", async () => {
    console.log(await hre.waffle.provider.getBlockNumber());
    const currentBlock = await hre.waffle.provider.getBlockNumber();
    await time.advanceBlockTo(currentBlock + 100);
    expect(await hre.waffle.provider.getBlockNumber()).to.equal(currentBlock + 100);
  })

  it('should count the votes on proposal', async () => {
    await expect(daoInstance.countVotes(1)).to.eventually.be.fulfilled;
    const proposal = await daoInstance.proposals("1");
    // console.log(proposal);
    expect(proposal.passed).to.equal(true);
  });

  it('should give if try to count the votes again for same proposal', async () => {
    await expect(daoInstance.countVotes(1)).to.eventually.be.rejectedWith("Votes already counted!");
  })
  
});

