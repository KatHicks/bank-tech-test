(function(exports) {

  function BankAccount(balance = 0, statement = new BankStatement()) {
    this.balance = balance;
    this.statement = statement;
  }

  BankAccount.prototype = {
    deposit: function(amount){
      this.balance += amount;
    },
    withdraw: function(amount){
      this.balance -= amount;
    },
  };

  exports.BankAccount = BankAccount;

})(this);
