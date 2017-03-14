# Practice Technical Test: Bank
### Makers Academy Week 10

[![Code Climate](https://codeclimate.com/github/KatHicks/bank-tech-test/badges/gpa.svg)](https://codeclimate.com/github/KatHicks/bank-tech-test)

### Instructions

**Requirements**
* You should be able to interact with the your code via a REPL like IRB or the JavaScript console
  * You don't need to implement a command line interface that takes input from STDIN
* Must have features for deposits and withdrawal
* Must have a feature to display account statement (date, amount, balance)
* Data can be kept in memory (it doesn't need to be stored to a database or anything)

**Acceptance criteria**
* Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see:

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

### Domain Model

Below is the domain model for my bank programme developed before implementation:
  * It aims to separate concerns in line with good object-oriented design
  * It involves delegation from the primary BankAccount object down to lower objects
  * It also attempted to guide my initial implementation with consideration of the properties and their basic data types

![Alt text](/assets/domainModel.png?raw=true "Optional Title")

Made one small minor ammendment to this planned domain model during the development, which was adding a `this.current_balance` property to the `Transaction` object

### Process

* Started the process by working through the unit specifications.
  * Added a `TransactionSpec.js` file and tested that the object existed, could be instantiated and had the intended properties with the correct values
  * Repeated this process for `TransactionHistory`; creating a spec file, and testing for all the necessary properties
  * Then repeated again for `BankStatement` and `BankAccount`
* Next started implementing the features which was writing the methods

### Reflections

* Found splitting out the printing of a bank statement into small testable chunks quite difficult - was quite a mammoth task
* Enjoyed learning about how to stub time in Jasmine and also figuring out it's matchers a bit more
  * Was a bit disappointed to realise that the number of built-in matchers didn't quite match up with RSpec - on which am assuming Jasmine was modelled
  * For example: Jasmine doesn't have a `change.by(x)` matcher in the same way that RSpec does
* Was also a bit of a shame that had to restructure by domain model halfway through - realised that calculating the current balance when printing each new line was not really the responsibility of the `BankStatement` object and also could be quite cumbersome if you had 100s of lines in the statement
