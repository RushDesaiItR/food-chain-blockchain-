import web3 from './web3';
import supplyChainFactory from '../build/contracts/SupplyChainFactory.json';

/*================================
    1.  CREATE FACTORY INSTANCE
================================*/  
const factoryContractAccountAddress = '0xf7a89bfa1b3da89f03565258c34b5f9f689cfcb7'; // get from deploy.js
const supplyChainFactoryInstance = new web3.eth.Contract( supplyChainFactory.abi, factoryContractAccountAddress );

// console.log( supplyChainFactoryInstance );
export default supplyChainFactoryInstance;