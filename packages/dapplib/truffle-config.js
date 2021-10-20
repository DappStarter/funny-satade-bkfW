require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strong radar spice clutch gown light army gather'; 
let testAccounts = [
"0x43a560ebe78a56d72a511f4b8253fdfd0e4f55f7243f51c3d42ff88fb55fdfb2",
"0xf4b659e723ecf10d7d978066cdaab32598d1adb5b3ed910788eecd875c4adaae",
"0x33101ecc97f74ff6a18b1c32489e22c67920982a1f058df006218e348f431d6a",
"0x67384bc999c074cd1d73b033db6932eb6ed37a74ea7f96c393bde7fd42f83db4",
"0xe3dafccb45ffb2978aaca93bd59204ccdda668b0950192f0143befbd40b71633",
"0x7cc9c38f15c003a1cc416a6e4897bc622cddd94540a7a8a4ee790d2152643004",
"0xb98157d08734f97203b7afdf5dd88fcc723db7b763a439d66912ac8515a89a15",
"0x970f8aece40622a0a0b9e39f9f4b1fecd8ed04426c9e8027acb6512667e7ec31",
"0xb725098b1cd207c6909186240163ddac1b88419814940ec1b7d0caffa62fb2bc",
"0xac1162343cfd5cbcd72e6d94622574ffb93952dd9721f09c362ddfb7f249764d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

