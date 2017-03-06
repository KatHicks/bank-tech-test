'use strict';

describe('TransactionHistory', function() {

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
