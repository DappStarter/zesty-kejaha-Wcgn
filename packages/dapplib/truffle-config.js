require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture stove razor praise code gentle light army gasp'; 
let testAccounts = [
"0xff054c56fef280ec67e0700c49eefbd8af29a9f4f88b9c3abada3e86fe81d283",
"0xbc23f14bf8c2bccfb42eec0a2bba2c5ab4295a7accf535c66940a424db59f53e",
"0x6deb8927250f5ca9eda50ecf471bbe0079dd750212e121fd2d6c3d9beef9be1c",
"0xaa1ffcacb8dcea1f94e0cabcf2f4c4a34bc52745f40078be71895abc38e70736",
"0x28182f413735566d61f15b00f2854dfa2ad19fb21a2f1960fad51324891f8f2d",
"0xcabc4eaf28beeff8b9b73278e03779882bd78dbb898b84b8deac60c533b3697b",
"0xa0bdc7ad292caebfe8ecd60c83a017f5c2c62e73d19c388d1426b5166aeef1bd",
"0xecde3f47fa22e98a59eaa2d1abad9b5ab22380386fe4fe7ccc5779c6271b7e92",
"0x21fe301edf9aea2e624de5cc5b98caecf9c821c48804ead5370e24e35ecf20a6",
"0x557b0dbe3156bdec2054d487d2d06ece77c19dc482db20c06da28cad913d590f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

