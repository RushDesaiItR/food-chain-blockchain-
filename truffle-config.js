

var HDWalletProvider = require("@truffle/hdwallet-provider");
const MNEMONIC = 'swap model sorry globe sunny theory vast layer pill conduct scout cute';

module.exports = {


  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
     
    },
    ropsten: {
      networkCheckTimeout: 40000, 
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/e4fc2420b6ba4ab0afd72b7e0517baa5")
      },
      gas: 4500000, 
      gasPrice: 10000000000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
      network_id:3   
    }
  },

 
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false
  }
};
