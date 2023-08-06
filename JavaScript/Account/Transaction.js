class Transaction {
    static transactionId = 0;
  
    constructor(type, amount) {
      this.id = Transaction.transactionId++;
      this.type = type;
      this.amount = amount;
      this.timestamp = new Date();
    }
  }
  module.exports = Transaction