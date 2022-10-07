import { ethers } from "ethers";

const nodereal_json_rpc = `https://bsc-mainnet.nodereal.io/v1/01eaa87194fc4af79b7ee60debf39bbe`;
const provider = new ethers.providers.JsonRpcProvider(nodereal_json_rpc);

const main = async () => {

    const network = await provider.getNetwork();
    console.log(`connect to ${JSON.stringify(network)}`);


    const address = '0xF977814e90dA44bFA03b6295A0616a897441aceC';
    const balance = await provider.getBalance(address);
    console.log(`balance of [${address}]:${ethers.utils.formatEther(balance)} BNB`);


    const blockNumber = await provider.getBlockNumber();
    console.log(`current blockNumber ${blockNumber}`);

    const gasPrice = await provider.getGasPrice();
    console.log(`gasPrice: ${gasPrice.toString()}`);

    const block = await provider.getBlock(100);
    console.log(block);


    const code = await provider.getCode("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");
    console.log(code);
}

main();