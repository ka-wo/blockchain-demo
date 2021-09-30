function Blockchain() {
    this.chain = []; // all of the blocks that we create and mine will be store here
    this.pendingTransactions = []; // all of the new transactions that will be created before they are placed into a block
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
     const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce, //proof of work, just a number in this case
        hash: hash,
        previousBlockHash: previousBlockHash
     };

     this.pendingTransactions = []; // The block contains all the previous transactions so we have to empty the new ones
     this.chain.push(newBlock);

     return newBlock
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1; // we want to return an index of a block that will hold this transaction - it will be the one created after creating this transaction (that's why we have +1)
}

module.exports = Blockchain;