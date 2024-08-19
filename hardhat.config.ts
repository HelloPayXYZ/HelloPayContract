import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  defaultNetwork: "polygon",
  networks: {
    polygon: {  
      url: "https://polygon.llamarpc.com",  
      accounts: [
        process.env.PRIVATE_KEY ?? ""
      ],
      verify: {
        etherscan: {
          apiUrl: 'https://api.polygonscan.com',
          apiKey: process.env.ETHERSCAN_APIKEY
        }
      }
    },
    op_sepolia: {
      url: "https://public.stackup.sh/api/v1/node/optimism-sepolia",
      accounts: [
        process.env.PRIVATE_KEY ?? ""
      ] 
    },
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: [
        process.env.PRIVATE_KEY ?? ""
      ], 
      verify: {
        etherscan: {
          apiUrl: 'http://api-sepolia.basescan.org',
          apiKey: process.env.ETHERSCAN_APIKEY
        }
      }
    },
    sepolia: {  
      chainId: 11155111,
      url: "https://ethereum-sepolia-rpc.publicnode.com",  
      accounts: [
        process.env.PRIVATE_KEY ?? ""
      ],
      verify: {
        etherscan: {
          apiUrl: 'http://api-sepolia.etherscan.io',
          apiKey: process.env.ETHERSCAN_APIKEY
        }
      }
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      ganache: 0,
    },
    tester: {
      default: 1,
      ganache: 1,
    }
  },
  mocha: {
    timeout: 0,
  },

  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          optimizer: { enabled: true, runs: 100_000 },
          evmVersion: "berlin",
        },
      },
    ],
  },
  deterministicDeployment: undefined,
};

export default config;
