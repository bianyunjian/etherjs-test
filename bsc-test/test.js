import { ethers } from "ethers";

//   let url = 'https://bsc-testnet.nodereal.io/v1/00f5ef3bda90404394d926ac9653efa2';

let url = 'https://meta-ape-bas-testnet-02.ankr.com';
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
const getLogs = async (filter) => {

    let logs = await provider.getLogs(filter);
    console.log(`===================getLogs=======================================`);

    console.log(`getGasPrice ${JSON.stringify(logs)}`);

};

getLogs({
    address: '0xa4584a613B820d9851abA6C9F139F360f8518b95',
    topics: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    fromBlock: 295670,
    toBlock: 295670
});
// setTimeout(() => {
//     getBlockNumber()
// }, 1000);



// getBlock(1);

// getTransaction('0x4a3e33e23d15f73597c4fba04be00d4d2a9dfa9a3093f8dbfa2e33f97e48c961');

// getGasPrice();


let eventTopicHashMapping = [

    // validator events
    {
        name: 'Transfer',
        fullName: 'event Transfer(address indexed from, address indexed to, uint256 amount)',
        hash: ''
    },
    {
        name: 'ValidatorAdded',
        fullName: 'event ValidatorAdded(address indexed validator, address owner, uint8 status, uint16 commissionRate)',
        hash: ''
    },
    {
        name: 'ValidatorModified',
        fullName: 'event ValidatorModified(address indexed validator, address owner, uint8 status, uint16 commissionRate)',
        hash: ''
    }
    ,
    {
        name: 'ValidatorRemoved',
        fullName: 'event ValidatorRemoved(address indexed validator)',
        hash: ''
    }
    ,
    {
        name: 'ValidatorOwnerClaimed',
        fullName: 'event ValidatorOwnerClaimed(address indexed validator, uint256 amount, uint64 epoch)',
        hash: ''
    }
    ,
    {
        name: 'ValidatorSlashed',
        fullName: 'event ValidatorSlashed(address indexed validator, uint32 slashes, uint64 epoch)',
        hash: ''
    }
    ,
    {
        name: 'ValidatorJailed',
        fullName: 'event ValidatorJailed(address indexed validator, uint64 epoch)',
        hash: ''
    }
    ,
    {
        name: 'ValidatorReleased',
        fullName: 'event ValidatorReleased(address indexed validator, uint64 epoch)',
        hash: ''
    }
    ,
    // staker events
    {
        name: 'Delegated',
        fullName: 'event Delegated(address indexed validator, address indexed staker, uint256 amount, uint64 epoch)',
        hash: ''
    },
    {
        name: 'Undelegated',
        fullName: 'event Undelegated(address indexed validator, address indexed staker, uint256 amount, uint64 epoch)',
        hash: ''
    },
    {
        name: 'Claimed',
        fullName: 'event Claimed(address indexed validator, address indexed staker, uint256 amount, uint64 epoch)',
        hash: ''
    }, {
        name: 'Redelegated',
        fullName: 'event Redelegated(address indexed validator, address indexed staker, uint256 amount, uint256 dust, uint64 epoch)',
        hash: ''
    }

    //System Reward
    , {
        name: 'DistributionShareChanged',
        fullName: 'event DistributionShareChanged(address account, uint16 share)',
        hash: ''
    }

    , {
        name: 'FeeClaimed',
        fullName: 'event FeeClaimed(address account, uint256 amount)',
        hash: ''
    }

    //Staking Pool Logic
    , {
        name: 'Stake',
        fullName: 'event Stake(address indexed validator, address indexed staker, uint256 amount)',
        hash: ''
    }, {
        name: 'Unstake',
        fullName: 'event Unstake(address indexed validator, address indexed staker, uint256 amount)',
        hash: ''
    }, {
        name: 'Claim',
        fullName: 'event Claim(address indexed validator, address indexed staker, uint256 amount)',
        hash: ''
    }
]

let abis = eventTopicHashMapping.map(t => t.fullName);
const iface = new ethers.utils.Interface(abis);
// console.log(iface.getSighash("balanceOf"));

// let hash = iface.getSighash("balanceOf(address)");
// console.log(hash);

// let hash = iface.getEventTopic("ValidatorAdded");
// console.log(hash); 

// for (const evt of eventTopicHashMapping) {
//     let hash = iface.getEventTopic(evt.name);
//     evt.hash = hash;
// }

// for (const evt of eventTopicHashMapping) {
//     console.log(`insert into abi_hash(${evt.hash};${evt.name};${evt.fullName}`);
// }
// console.log("============================");
// for (const evt of eventTopicHashMapping) {

//     console.log(`INSERT INTO "public"."config_abi_hash"("hash", "name", "full_name") VALUES ('${evt.hash}', '${evt.name}', '${evt.fullName}');`);
// }

 

const getValidatorStatusAtEpoch = async (validatorAddress, epoch) => {

    let contract_address = '0x0000000000000000000000000000000000001000';
    const abi = [
        `function getValidatorStatusAtEpoch(address validatorAddress, uint64 epoch) external view returns (
        address ownerAddress,
        uint8 status,
        uint256 totalDelegated,
        uint32 slashesCount,
        uint64 changedAt,
        uint64 jailedBefore,
        uint64 claimedAt,
        uint16 commissionRate,
        uint96 totalRewards ) `
    ];
    const stakingContract = new ethers.Contract(contract_address, abi, provider);


    let result = await stakingContract.getValidatorStatusAtEpoch(validatorAddress, epoch);
    console.log(`===================getValidatorStatusAtEpoch=======================================`);

    console.log(`getValidatorStatusAtEpoch`, result);

};

getValidatorStatusAtEpoch('0xe357cb706a3a767300d8836420a293b58aedb525', 1)
