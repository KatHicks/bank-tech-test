(function(exports) {

  function TransactionHistory(transactions = []) {
    this.transactions = transactions;
  }

  TransactionHistory.prototype = {
    addTransaction: function(amount){
      var transaction = new Transaction(amount);
      this.transactions.push(transaction);
    }
  };

  exports.TransactionHistory = TransactionHistory;

})(this);
