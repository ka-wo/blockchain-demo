const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, 'OD8SD2723', '123DSA2D2R');
// bitcoin.createNewBlock(2151, 'DA2D2D2D22DR43', '55161SCSC');

// bitcoin.createNewTransaction(250, "Steeve", "Sarah");
// bitcoin.createNewTransaction(3300, "Rob", "Rilley");
// bitcoin.createNewBlock(111, 'AS8DS7D72D', 'D2D22D2D222334');

// bitcoin.createNewTransaction(5400, "Straw", "Bren");

const previousBlockHash = '0000OADA83JAOJ3O83J';
const currentBlockData = [
    { amount: 10, sender: 'ASDAHI3UH23234HFD', recipient: "OIHTJOITRH59595" },
    { amount: 46, sender: 'IUHIUHVS8989834', recipient: "OJKPOKPOKWWQ423" },
    { amount: 200, sender: 'ZCCMLXMLKZCLKAMS8', recipient: "VDSSVDVDSSDVVD" }
];
const nonce = 20;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
const newNonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, newNonce));


