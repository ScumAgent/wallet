require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.28",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    },],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      forking: {
        url: "https://arbitrum-sepolia-rpc.publicnode.com",
      },
      chainId: 421614,
    },
    arbtest: {
      url: "https://arbitrum-sepolia-rpc.publicnode.com",
      chainId: 421614,
      accounts: [process.env.PK],
    },
  },
};
