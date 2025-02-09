/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
   defaultNetwork: 'testnet',

   networks: {
      hardhat: {
      },
      testnet: {
         url: 'https://rpc.test2.btcs.network', //changes: nagkaroon ng 2
         accounts: [PRIVATE_KEY], //change: name
         chainId: 1114, // update chainID kasi outdate
      }
   },
   solidity: {
      compilers: [
        {
           version: '0.8.28',
           settings: {
              evmVersion: 'paris',
              optimizer: {
                 enabled: true,
                 runs: 200,
              },
           },
        },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
