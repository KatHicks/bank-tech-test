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

});
