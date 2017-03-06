'use strict';

describe('BankAccount', function() {

  it('should be a defined object', function() {
    expect(bankAccount instanceof(BankAccount)).toBe(true);
  });

  it('should have a balance property', function() {
    expect(bankAccount.balance).toBeDefined();
  });

  it('should have the correct balance property', function() {
    expect(bankAccount.balance).toBe(0.00);
  });

  it('should have a statement property', function() {
    expect(bankAccount.statement).toBeDefined();
  });

  it('should have the correct statement property', function() {
    expect(bankAccount.statement).toBe(bankStatement);
  });

  describe('#deposit', function() {
    it('should increase the balance', function() {
      bankAccount.deposit(1000.00);
      expect(bankAccount.balance).toEqual(1000.00);
    });
  });

});
