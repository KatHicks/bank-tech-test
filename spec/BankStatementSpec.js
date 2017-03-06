'use strict';

describe('BankStatement', function() {
  var bankStatement;

  beforeEach(function() {
    bankStatement = new BankStatement();
  });

  it('should be a defined object', function() {
    expect(bankStatement instanceof(BankStatement)).toBe(true);
  });

});
