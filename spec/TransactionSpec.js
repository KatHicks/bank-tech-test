'use strict';

describe('Transaction', function() {
  var transaction;
  var today;

  beforeEach(function() {
    today = new Date(2017, 2, 6);
    jasmine.clock().install();
    jasmine.clock().mockDate();
    transaction = new Transaction(1000.00, today);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
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

});
