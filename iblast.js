const { Web3 } = require('web3');
const { MetaMaskSDK } = require("@metamask/sdk");

// Define the IBlast interface
class IBlast {
    // Connect a wallet
    connectWallet() {
        throw new Error('Method "connectWallet" must be implemented');
    }

    // Stake ETH
    stakeETH(amount) {
        throw new Error('Method "stakeETH" must be implemented');
    }

    // Claim yields
    claimYields() {
        throw new Error('Method "claimYields" must be implemented');
    }
}

// Implement the IBlast interface
class BlastImplementation extends IBlast {
    constructor(contractAddress) {
        super();
        this.web3 = new Web3('https://sepolia.blast.io');
        this.contractAddress = contractAddress;
        this.contract = ''
        this.walletadress = '';
    }

    async connectWallet() {

            const MMSDK = new MetaMaskSDK({
                dappMetadata: {
                    name: "Example Node.js Dapp",
                    url: window.location.href,
                },
                // Other options
            });

            // You can also access via window.ethereum
            const ethereum = MMSDK.getProvider();

            this.walletadress = await ethereum.request({ method: "eth_requestAccounts", params: [] });

        // Your wallet connection logic using Web3.js
        // For example, using MetaMask
        // if (typeof window !== "undefined" && window?.ethereum) {
        //     this.walletadress = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // } else {
        //     throw new Error('Please install MetaMask to connect your wallet');
        // }
    }

    // Get ABI for smart contract
    async getCode() {
        return await this.web3.eth.getCode(this.contractAddress)
    }

    // Set smart contract
    async setContract() {
        const abi = await getCode();
        this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
    }

    async stakeETH(amount) {
        console.log('this.walletadress', this.walletadress)
        // Convert ETH to Wei
        const amountWei = this.web3.utils.toWei(amount.toString(), 'ether');
        // Send transaction to stake ETH
        return await this.contract.methods.stake(amountWei).send({ from: this.walletadress, value: amountWei });
    }

    async claimYields() {
        // Send transaction to claim yields
        return await this.contract.methods.claimYields().send({ from: this.walletadress });
    }
}

module.exports = {
    BlastImplementation
}
