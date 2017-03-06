'use strict';

describe('BankAccount', function() {

  it('should be a defined object', function() {
    expect(bankAccount instanceof(BankAccount)).toBe(true);
  });

  it('should have a balance property', function() {
    expect(bankAccount.balance).toBeDefined();
  });

  it('should have the correct balance property', function() {
    expect(bankAccount.balance).toBe(100.00);
  });

});
