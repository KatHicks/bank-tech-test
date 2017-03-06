'use strict';

describe('BankStatement', function() {
  var bankStatement;
  var today;
  var yesterday;
  var transactions;
  var transactionHistory;

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

    bankStatement = new BankStatement(transactionHistory);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it('should be a defined object', function() {
    expect(bankStatement instanceof(BankStatement)).toBe(true);
  });

  it('should have a history property', function() {
    expect(bankStatement.history).toBeDefined();
  });

  it('should have the correct transactions property', function() {
    expect(bankStatement.history).toBe(transactionHistory);
  });

});
