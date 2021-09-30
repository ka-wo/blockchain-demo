const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, 'OD8SD2723', '123DSA2D2R');

bitcoin.createNewBlock(2151, 'DA2D2D2D22DR43', '55161SCSC');

bitcoin.createNewTransaction(250, "Steeve", "Sarah");
bitcoin.createNewTransaction(3300, "Rob", "Rilley");
bitcoin.createNewBlock(111, 'AS8DS7D72D', 'D2D22D2D222334');

bitcoin.createNewTransaction(5400, "Straw", "Bren");


console.log(bitcoin);
console.log(bitcoin.chain[1]);


