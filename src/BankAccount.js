(function(exports) {

  function BankAccount(balance, statement = new BankStatement()) {
    this.balance = balance;
    this.statement = statement;
  }

  exports.BankAccount = BankAccount;

})(this);
