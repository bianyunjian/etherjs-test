import { ethers } from "ethers";
const INFURA_ID = '2d424b24ac004244a8195db310f73f41'
const rpc = `https://goerli.infura.io/v3/${INFURA_ID}`;
const provider = new ethers.providers.JsonRpcProvider(rpc);

const main = async () => {

    const privateKey = ``;
    const wallet1 = new ethers.Wallet(privateKey, provider);

    const address1 = await wallet1.getAddress();
    console.log(`address1:${address1}`);

    console.log(`privateKey1: ${wallet1.privateKey}`);

    const txCount1 = await wallet1.getTransactionCount();
    console.log(`txCount1: ${txCount1}`);

    const balance = await wallet1.getBalance();
    console.log(`balance:${balance}`);

    //send token
    const address2 = `0xCB4C43154353261fb8429533d2E055Be24830B8F`;
    const tx = {
        to: address2,
        value: ethers.utils.parseEther("0.001")
    }
    const receipt = await wallet1.sendTransaction(tx);
    await receipt.wait();
    console.log(receipt);

    const balance1_latest = await wallet1.getBalance();
    console.log(`balance1_latest:${balance1_latest}`);
}

main();