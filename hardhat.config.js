require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const key= process.env.PRIVATE_KEY;
const nodekey= process.env.ALCHEMY_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 module.exports = {
   defaultNetwork: "mumbai",
   networks: {
     hardhat: {
     },
     mumbai: {
       url: `https://polygon-mumbai.g.alchemy.com/v2/${nodekey}`,
       accounts: [key]
     }
   },
   solidity: {
     version: "0.7.3",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
 }