'use strict';

describe('Transaction', function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction(1000.00);
  });

  it('should be a defined object', function() {
    expect(transaction instanceof(Transaction)).toBe(true);
  });

  it('should have an amount property', function() {
    expect(transaction.amount).toBeDefined();
  });

  it('should have the correct amount property', function() {
    expect(transaction.amount).toBe(1000.00);
  });

});
