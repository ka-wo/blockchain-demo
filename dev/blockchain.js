function Blockchain() {
    this.chain = []; // all of the blocks that we create and mine will be store here
    this.newTransactions = []; // all of the new transactions that will be created before they are placed into a block
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
     const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce, //proof of work, just a number in this case
        hash: hash,
        previousBlockHash: previousBlockHash
     };

     this.newTransactions = []; // The block contains all the previous transactions so we have to empty the new ones
     this.chain.push(newBlock);

     return newBlock
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length-1];
}

module.exports = Blockchain;