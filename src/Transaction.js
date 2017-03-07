(function(exports) {

  function Transaction(amount, current_balance, date = new Date()) {
    this.amount = amount;
    this.current_balance = current_balance;
    this.date = date;
  }

  exports.Transaction = Transaction;

})(this);
