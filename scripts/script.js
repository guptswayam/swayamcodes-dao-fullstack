// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { singletons } = require('@openzeppelin/test-helpers');
require('@openzeppelin/test-helpers/configure')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [deployer, addr1] = await hre.ethers.getSigners()
  const chainId = await deployer.getChainId();
  console.log(chainId);
  if(chainId == 31337) {
    await singletons.ERC1820Registry(deployer.address)    // ERC1820 registery is required in case of ganache or local blockchain and ERC-777, not need with testnet or mainnet
    await singletons.ERC1820Registry(addr1.address)
  }
  const SwayamCodesToken = await hre.ethers.getContractFactory("SwayamCodesToken");
  const swayamCodesToken = await SwayamCodesToken.deploy(hre.ethers.utils.parseEther("1000"));

  await swayamCodesToken.deployed();

  await swayamCodesToken.connect(deployer).transfer(addr1.address, hre.ethers.utils.parseEther("1"))

  const DAO = await hre.ethers.getContractFactory("DAO");
  const dao = await DAO.deploy(swayamCodesToken.address);

  await dao.deployed();

  console.log("SwayamCodesToken deployed to", swayamCodesToken.address)
  console.log("DAO deployed to:", dao.address);
  
  saveContractAndContractAddress(swayamCodesToken, "SwayamCodesToken");
  saveContractAndContractAddress(dao, "DAO");
}

function saveContractAndContractAddress(contract, name) {
  const fs = require("fs");
  const contractsDir = `${__dirname}/../build/contracts`;
  if(!fs.existsSync(contractsDir))
    fs.mkdirSync(contractsDir);

  fs.writeFileSync(`${contractsDir}/${name}-address.json`, JSON.stringify({address: contract.address}, undefined, 2));

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(`${contractsDir}/${name}.json`, JSON.stringify(contractArtifact, null, 2))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
