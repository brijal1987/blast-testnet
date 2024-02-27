const { BlastImplementation } = require('./iblast')
const output = []
new BlastImplementation('0x4300000000000000000000000000000000000002').connectWallet()
    .then(() => output.push('Connected to ethereum wallet successfully'))
    .then(() => {
        const amount = 1
        blast.stakeETH(amount)
        output.push(`${amount} ETH successfully staked`);
        console.log('output', output)
    })
    .then(() => {
        blast.claimYields()
        output.push('Yields successfully claimed');
        console.log('output', output)
    })
    .catch(err => {
        console.error(err);
        output.push(err);
        console.log('output', output)
    });


//const http = require("http");
//const url = require('url');

// const server = http.createServer();
// server.listen(3000, () => {
//     console.log('The HTTP server is listening at Port http://localhost:3000.');
// });

// server.on('request', async (request, response) => {
//     const reqUrl = url.parse(request.url).pathname
//     if (reqUrl == "/") {

//         const output = []
//         await new BlastImplementation('0x4300000000000000000000000000000000000002').connectWallet()
//             .then(() => output.push('Connected to ethereum wallet successfully'))
//             .then(() => {
//                 const amount = 1
//                 blast.stakeETH(amount)
//                 output.push(`${amount} ETH successfully staked`);
//             })
//             .then(() => {
//                 blast.claimYields()
//                 output.push('Yields successfully claimed');
//             })
//             .catch(error => {
//                 console.error(error);
//                 output.push(error);
//                 output.push("Please connect <a href='/connect'>Connect Wallet</a>");
//             });

//         response.setHeader('Content-Type', 'application/json');
//         response.end(JSON.stringify(output.toString("\n")));
//     }
//     if (reqUrl == "/connect") {
//         output.push("Back to url <a href='/'>Homw</a>");
//         response.write("hello world")
//         response.end()
//     }
// });




// const web3 = new Web3('https://sepolia.blast.io')
// var contract = new web3.eth.Contract([...], '0xed530ba33b4dc14572864bb9a776c9a42cf89fa5', {
//     from: '0x4200000000000000000000000000000000000023', // default from address
//     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// });

// // Check if MetaMask is installed
// // if (window.ethereum) {
// //     window.ethereum.request({ method: 'eth_requestAccounts' });
// // } else {
// //     console.log('MetaMask is not installed');
// // }
// //console.log('-==web3', web3)

// // const contractABI = ['0xed530ba33b4dc14572864bb9a776c9a42cf89fa5']//[ /* ABI of the staking contract */ ];
// // const contractAddress = '0x4200000000000000000000000000000000000023'; // Address of the staking contract

// // const contract = new web3.eth.Contract(contractABI, contractAddress);
// //console.log('-==web3', contract)
// const amountToStake = web3.utils.toWei('1', 'ether'); // Amount to stake (1 ETH in this example)
// console.log('--> amountToStake', amountToStake)
// contract.methods.stake(amountToStake).send({ from: userAddress, value: amountToStake })
//     .on('transactionHash', (hash) => {
//         console.log('Transaction hash:', hash);
//     })
//     .on('confirmation', (confirmationNumber, receipt) => {
//         console.log('Confirmation:', confirmationNumber);
//         console.log('Receipt:', receipt);
//     });

// contract.methods.claimYields().send({ from: userAddress })
//     .on('transactionHash', (hash) => {
//         console.log('Transaction hash:', hash);
//     })
//     .on('confirmation', (confirmationNumber, receipt) => {
//         console.log('Confirmation:', confirmationNumber);
//         console.log('Receipt:', receipt);
//     });
