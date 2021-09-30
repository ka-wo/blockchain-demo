function Blockchain() {
    this.chain = []; // all of the blocks that we create and mine will be store here
    this.newTransactions = []; // all of the new transactions that will be created before they are placed into a block
}