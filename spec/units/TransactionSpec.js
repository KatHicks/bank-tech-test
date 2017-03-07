'use strict';

describe('Transaction', function() {

  var transaction;

  beforeEach(function() {
    transaction = new Transaction(1000.00, 1000.00, today);
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

  it('should have a date property', function() {
    expect(transaction.date).toBeDefined();
  });

  it('should have the correct date property', function() {
    expect(transaction.date).toBe(today);
  });

  it('should have a current_balance property', function() {
    expect(transaction.current_balance).toBeDefined();
  });

  it('should have the correct current_balance property', function() {
    expect(transaction.current_balance).toBe(1000.00);
  });

});
