var express = require('express');
const Blockchain = require('./blockchain');
var app = express();
const bodyParser = require('body-parser');

const bitcoin = new Blockchain();

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


    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, newBlockHash);
    res.json({
        "note": "New block mined successfully",
        block: newBlock
    });
});


app.listen(3000, function() {
    console.log('Listening on port 3000...');
});