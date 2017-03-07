(function(exports) {

  function BankAccount(balance = 0, statement = new BankStatement()) {
    this.balance = balance;
    this.statement = statement;
  }

  BankAccount.prototype = {
    deposit: function(amount){
      this.balance += amount;
      this.statement.addTransaction(amount, this.balance);
    },
    withdraw: function(amount){
      this.balance -= amount;
      this.statement.addTransaction(-amount, this.balance);
    },
    viewStatement: function(){
      return this.statement.display();
    }
  };

  exports.BankAccount = BankAccount;

})(this);
