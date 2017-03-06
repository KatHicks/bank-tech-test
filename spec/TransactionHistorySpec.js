'use strict';

describe('TransactionHistory', function() {
  var transactionHistory;
  var today;
  var yesterday;
  var transactions;

  beforeEach(function() {
    today = new Date(2017, 2, 6);
    yesterday = new Date(2017, 2, 5);

    jasmine.clock().install();
    jasmine.clock().mockDate();

    transactions = [
      new Transaction(1000.00, yesterday),
      new Transaction(2000.00, today)
    ]

    transactionHistory = new TransactionHistory(transactions);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it('should be a defined object', function() {
    expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
  });

  it('should have a transactions property', function() {
    expect(transactionHistory.transactions).toBeDefined();
  });

  it('should have the correct transactions property', function() {
    expect(transactionHistory.transactions).toBe(transactions);
  });

});
