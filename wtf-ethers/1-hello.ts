import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();

const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH balance of vitalik:${ethers.utils.formatEther(balance)} ETH`);
}

main();