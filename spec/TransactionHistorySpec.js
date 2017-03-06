'use strict';

describe('TransactionHistory', function() {
  var transactionHistory;

  beforeEach(function() {
    transactionHistory = new TransactionHistory();
  });

  it('should be a defined object', function() {
    expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
  });

});
