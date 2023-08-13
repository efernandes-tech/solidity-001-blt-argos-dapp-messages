import Web3 from 'web3';
import ABI from './ABI.json';

const CONTRACT_ADDRESS = '0x9aCD1425D694820F4000F38D446dcB70A0C56BBE';

declare global {
    interface Window {
        ethereum: any;
    }
}

export async function doLogin() {
    if (!window.ethereum) throw new Error('No Metamask found');

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();

    if (!accounts || !accounts.length)
        throw new Error('Wallet not found or allowed');

    localStorage.setItem('wallet', accounts[0]);

    return accounts[0];
}

function getContract() {
    if (!window.ethereum) throw new Error('No Metamask found');

    const web3 = new Web3(window.ethereum);
    const from = localStorage.getItem('wallet') ?? '';

    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

export async function addMessage(text: string) {
    const contract = getContract();
    // @ts-ignore
    return contract.methods.addMessage(text).send();
}

export async function changeUsername(newName: string) {
    const contract = getContract();
    // @ts-ignore
    return contract.methods.changeUsername(newName).send();
}
