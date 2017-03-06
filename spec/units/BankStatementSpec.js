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

    beforeEach(function() {
      spyOn(transactionHistory, 'addTransaction');
    });

    it('should add transaction to the history', function() {
      bankStatement.addTransaction(1000.00);
      expect(bankStatement.history.addTransaction).toHaveBeenCalled();
    });
  });

});
