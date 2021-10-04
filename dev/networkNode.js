var express = require('express');
const Blockchain = require('./blockchain');
var app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');
const port = process.argv[2];

const bitcoin = new Blockchain();
const nodeAddress = uuid().split('-').join(''); //split and join used to remove dashes from generated UUID

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);    
    res.json({ note: `Transaction will be added in block ${blockIndex}`});
});

app.get('/mine', function(req, res){

    const previousBlock = bitcoin.getLastBlock();

    const previousBlockHash = previousBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: previousBlock['index'] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const newBlockHash =  bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    // Add a reward for mining for the current node
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, newBlockHash);
    res.json({
        "note": "New block mined successfully",
        block: newBlock
    });
});


app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
});