var today;
var yesterday;
var transactions;
var transactionHistory;
var bankStatement;
var bankAccount;

beforeEach(function() {
  today = new Date(2017, 2, 6);
  yesterday = new Date(2017, 2, 5);

  jasmine.clock().install();
  jasmine.clock().mockDate();

  transactions = [
    new Transaction(1000.00, yesterday),
    new Transaction(2000.00, today)
  ];

  transactionHistory = new TransactionHistory(transactions);
  bankStatement      = new BankStatement(transactionHistory);
  bankAccount        = new BankAccount(100.00);
});

afterEach(function () {
  jasmine.clock().uninstall();
});
