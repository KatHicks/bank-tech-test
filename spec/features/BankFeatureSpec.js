'use strict';

describe('Features', function() {

  var nationwide;

  beforeEach(function() {
    nationwide = new BankAccount();
  });

  it('client can make a deposit of 1000.00', function() {
    nationwide.deposit(1000.00);
    expect(nationwide.balance).toEqual(1000.00);
  });

  it('client can make a withdrawal of 500.00', function() {
    nationwide.withdraw(500.00);
    expect(nationwide.balance).toEqual(-500.00);
  });

});
