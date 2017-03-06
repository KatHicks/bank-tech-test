'use strict';

describe('Features', function() {

  var nationwide;
  var headers;
  var date;
  var amount;

  beforeEach(function() {
    nationwide = new BankAccount();
    headers    = "date       || credit  || debit  || balance"
    date       = "06/03/2017"
    amount     = "1000.00"
  });

  it('client can make a deposit of 1000.00', function() {
    nationwide.deposit(1000.00);
    expect(nationwide.balance).toEqual(1000.00);
  });

  it('client can make a withdrawal of 500.00', function() {
    nationwide.withdraw(500.00);
    expect(nationwide.balance).toEqual(-500.00);
  });

  it('date of deposit is recorded', function() {
    nationwide.deposit(1000.00);
    expect(nationwide.viewStatement()).toContain(date);
  });

  it('date of withdrawal is recorded', function() {
    nationwide.withdraw(500.00);
    expect(nationwide.viewStatement()).toContain(date);
  });

  it('client can print her bank statement', function() {
    expect(nationwide.viewStatement()).toContain(headers);
  });

  it('bank statement prints transaction amount and date', function() {
    nationwide.deposit(1000.00);
    expect(nationwide.viewStatement()).toContain(amount);
  });

});
