## Bank Tech Test

### Technologies used
- Javascript
- Node

### Testing Framework
- Jest (with Babel)

### Instructions:
#### Running the local server
1. To run the program clone the repo to your local directory
2. Run npm install
3. Run npx http-server
4. Go to localhost:8080 in your browser

#### Using the program:
1. Open your web browser console (right click the page, then click inspect)
2. In the console create a new instance of the Transactions class and name it.  e.g newTransactions = new Transactions
3. To deposit an amount enter newTransactions.deposit(amount, date).  Amount should be a number and date should be in the STRING format 'DD-MM-YYYY'
4. To withdraw an amount enter newTransactions.withdraw(amount, date).  Amount should be a number and date should be in the STRING format 'DD-MM-YYYY'.
5. To print a statement in the console enter newTransactions.getBankStatement().  

### Browser Console Code Example:
```
newTransactions = new Transactions
newTransactions.deposit(1000, '02-12-2020')
newTransactions.withdraw(500, '02-12-2020')
newTransactions.getBankStatement()
"date || credit || debit || balance
02-12-2020 || || 500.00 || 500.00
02-12-2020 || 1000.00 || || 1000.00
"
```

### Running tests
1. Clone repo to your local directory (if you have not already)
2. Run 'npm install'
3. In the terminal run 'npm t' to run the tests
4. To see coverage run jest --coverage

### Test coverage

File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |    80.95 |     100 |     100 |                   
 Statement.js    |     100 |       75 |     100 |     100 | 13                
 Transactions.js |     100 |    82.35 |     100 |     100 | 16,22,32          


### Edge cases
- User cannot enter negative number to withdraw() or deposit()
- User can enter decimal figure to withdraw() or deposit()
- Date format should be DD-MM-YYYY.  If date includes / or . then an error will appear.  

### User Stories
- As a user so that I can manage my account I need to be able to deposit and withdraw to my account
- As a user so that my transactions are dated I need to be able to give a transaction date
- As a user so that I can see my account status I need to print a bank statement of my transactions
- As a user so that I can see the movements on my account I need to see a balance on my statement that updates for each transaction
- As a user so that I can identify deposits and withdrawals on my statement, withdrawals should be debits and deposits should be credits

### Tech test Requirements
- [Link to test github page](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)
