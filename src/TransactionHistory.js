(function(exports) {

  function TransactionHistory(transactions = []) {
    this.transactions = transactions;
  }

  TransactionHistory.prototype = {
    addTransaction: function(amount, balance){
      var transaction = new Transaction(amount, balance);
      this.transactions.push(transaction);
    }
  };

  exports.TransactionHistory = TransactionHistory;

})(this);
