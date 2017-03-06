(function(exports) {

  function Transaction(amount, date = new Date()) {
    this.amount = amount;
    this.date = date;
  }

  exports.Transaction = Transaction;

})(this);
