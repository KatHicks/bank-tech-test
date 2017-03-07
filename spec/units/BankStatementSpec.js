'use strict';

describe('BankStatement', function() {

  it('should be a defined object', function() {
    expect(bankStatement instanceof(BankStatement)).toBe(true);
  });

  it('should have a history property', function() {
    expect(bankStatement.history).toBeDefined();
  });

  it('should have the correct transactions property', function() {
    expect(bankStatement.history).toBe(transactionHistory);
  });

  describe('#addTransaction', function() {

    beforeEach(function() {
      spyOn(transactionHistory, 'addTransaction');
    });

    it('should add transaction to the history', function() {
      bankStatement.addTransaction(1000.00);
      expect(bankStatement.history.addTransaction).toHaveBeenCalled();
    });
  });

  describe('#display', function() {

    var headers;
    var amount;

    beforeEach(function() {
      headers    = "date       || credit  || debit  || balance"
      amount     = "1000.00"
    });

    it('should display the headers', function() {
      expect(bankStatement.display()).toContain(headers);
    });

    it('should display the date in the correct format', function() {
      expect(bankStatement.display()).toContain("07/03/2017");
    });

    it('should display the correct transaction amount', function() {
      bankStatement.addTransaction(1000.00, 1000.00)
      expect(bankStatement.display()).toContain(amount);
    });
  });

});
