(function(exports) {

  function BankStatement(history = new TransactionHistory()) {
    this.history = history;
  }

  exports.BankStatement = BankStatement;

})(this);
