import { ethers } from "ethers";

// let url = 'https://bsc-testnet.nodereal.io/v1/00f5ef3bda90404394d926ac9653efa2';

let url = 'https://meta-ape-bas-testnet-01.ankr.com';
const provider = new ethers.providers.JsonRpcProvider(url);

const getBlockNumber = async () => {
    let block_number = await provider.getBlockNumber()

    console.log(`block_number ${block_number}`);

    let block = await provider.getBlock(block_number);
    console.log(`=======================getBlockNumber===================================`);

    console.log(`block ${JSON.stringify(block)}`);

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

setTimeout(() => {
    getBlockNumber()
}, 1000);



getBlock(781513);

getTransaction('0x4a3e33e23d15f73597c4fba04be00d4d2a9dfa9a3093f8dbfa2e33f97e48c961');

getGasPrice();