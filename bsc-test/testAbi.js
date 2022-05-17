import { ethers } from "ethers";

 
let eventTopicHashMapping = [

    // validator events
    {
        name: 'Transfer',
        fullName: 'event Transfer(address indexed from, address indexed to, uint256 amount)',
        hash: ''
    },
     
]

let abis = eventTopicHashMapping.map(t => t.fullName);
const iface = new ethers.utils.Interface(abis);
 
 for (const evt of eventTopicHashMapping) {
     let hash = iface.getEventTopic(evt.name);
     evt.hash = hash;
 }

 for (const evt of eventTopicHashMapping) {
     console.log(`insert into abi_hash(${evt.hash};${evt.name};${evt.fullName}`);
 }
 

 