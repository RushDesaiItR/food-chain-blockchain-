import Web3 from 'web3';

/*================================
    1.  USING MODULES 
================================*/


var HDWalletProvider = require("@truffle/hdwallet-provider");
/*======================================================
    2.  CREATE PROVIDER AND WEB3 INSTANCE 
======================================================*/
/*
    1.  METAMASK MNEMONIC
*/
const mnemonic = "swap model sorry globe sunny theory vast layer pill conduct scout cute";
/*
    2.  DEFINE PROVIDER
*/
const ropsten_network = 'https://ropsten.infura.io/v3/e4fc2420b6ba4ab0afd72b7e0517baa5';
const provider = new HDWalletProvider( mnemonic, ropsten_network );
const web3 = new Web3( provider );

export default web3;