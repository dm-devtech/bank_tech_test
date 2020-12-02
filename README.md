## Bank Tech Test

### Technologies used
- Javascript

### Testing Framework
- Jest (with Babel)

### Instructions to run program in browser console:
1. To run the program clone the repo to your local directory
2. Copy of the path of the index.html file and paste into your web browser
3. Open your web browser console (via right clicking then click inspect on the page)
4. In the console create a new instance of the Transactions class and name it.  e.g newTransactions = new Transactions
5. To deposit an amount using the above instance you should enter newTransactions.deposit(amount, date).  Amount should be a number and date should be in the STRING format 'DD-MM-YYYY'
6. To withdraw an amount using the above instance you should enter newTransactions.withdraw(amount, date).  Amount should be a number and date should be in the STRING format 'DD-MM-YYYY'.
7. To print a statement using the same instance as above enter newTransactions.getBankStatement().  

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
1. Clone repo to your local directory if you have not already
2. Install Jest/Babel
3. Amend line 1 in each class file (src/Statement.js and src/Transactions.js)to 'export default class <class name>'
4. Uncomment line 3 in src/Transactions.js (// import Statement from '../src/Statement.js')
5. In the terminal run 'npm test'
6. To see coverage run jest --coverage

### Edge cases
- User cannot enter negative number to withdraw() or deposit()
- User can enter decimal figure to withdraw() or deposit()
- Date format should be DD-MM-YYYY.  If date includes / or . then an error will appear.  

### Test coverage
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |    80.95 |     100 |     100 |                   
 Statement.js    |     100 |       75 |     100 |     100 | 13                
 Transactions.js |     100 |    82.35 |     100 |     100 | 16,22,32          
-----------------|---------|----------|---------|---------|-------------------
