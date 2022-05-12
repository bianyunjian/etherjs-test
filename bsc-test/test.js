import { ethers } from "ethers";

// let url = 'https://bsc-testnet.nodereal.io/v1/00f5ef3bda90404394d926ac9653efa2';

let url = 'https://meta-ape-bas-testnet-01.ankr.com';
const provider = new ethers.providers.JsonRpcProvider(url);

const getBlockNumber = async () => {
    let block_number = await provider.getBlockNumber()

    console.log(`block_number ${block_number}`);

};

const getBlock = async (block_number) => {
    let block = await provider.getBlock(block_number);
    console.log(`======================getBlock====================================`);

    console.log(`getBlock ${JSON.stringify(block)}`);

};

const getTransaction = async (tx) => {

    let transaction = await provider.getTransaction(tx);
    console.log(`===================getTransaction=======================================`);

    console.log(`getTransaction ${JSON.stringify(transaction)}`);

};
const getGasPrice = async () => {

    let gasPrice = await provider.getGasPrice();
    console.log(`===================getGasPrice=======================================`);

    console.log(`getGasPrice ${gasPrice.toBigInt().toString()}`);

};

const getCode = async (contract_address) => {
    let codePromise = await provider.getCode(contract_address);

    console.log(`===================getCode=======================================`);

    console.log(`getCode`, codePromise);

};

// setTimeout(() => {
//     getBlockNumber()
// }, 1000);



getBlock(98);

getTransaction('0xefa4b13219aa13d980b820ec6a48bd393e2e7f7a5942f0545b9098f5322c9667');

// getGasPrice();

// getCode('0x0000000000000000000000000000000000001000');

getCode('0x716aa16b01afcccd4434a8295aa2e845a611cd82');