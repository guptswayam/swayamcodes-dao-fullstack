require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({path: "./.env"})

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "localhost",     // console.log in sol file only works with hardhat network
  networks: {
    "polygon_mumbai": {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.ACCOUNT1_PRIVATE_KEY, process.env.ACCOUNT2_PRIVATE_KEY]
    }
  },

  /*
  => By default, we can only see bytecode on etherscan, to also see the smart contract code we should verify and publish the source code
  => Publishing code is good because blockchain is decentralized and your code should be transparent to everyone
  => We need the Etherscan Api Key that we can get the from etherscan website itself. API key is same for mainnet and testnet for the same blockchain
  => https://coinsbench.com/verify-smart-contract-on-polygonscan-using-hardhat-9b8331dbd888
  => https://hardhat.org/plugins/nomiclabs-hardhat-etherscan
  => Eg: npx hardhat verify --network polygon_mumbai 0xCa7D2C5f28Dc97aeA66C0Af0B1A49ebEb1444Af3 --constructor-args etherscan/SwayamCodesTokenArguments.js
  */
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.ETHERSCAN_API_KEY
    }
  }
};
