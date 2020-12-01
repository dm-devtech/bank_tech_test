## Bank Tech Test

### Technologies used
- Javascript

### Testing Framework
- Jest (with Babel)

### Instructions:
- To run the program clone the repo
- Copy of the path of the index.html file and paste into your web browser
- Open your web browser console
- Create a new instance of the Transactions class and name it.  e.g newTransactions = new Transactions
- To deposit an amount using the above instance you should enter newTransactions.deposit(amount, date).  Amount should be a number and date should be in the STRING format 'DD-MM-YYYY'
- To withdraw an amount using the above instance you should enter newTransactions.withdraw(amount, date).  Amount should be a number and date should be in the STRING format 'DD-MM-YYYY'.
- To print a statement using the same instance as above enter newTransactions.getBankStatement().  

### Running tests
- Clone repo
- Install Jest
- Amend line 1 to 'export default class <class name>'
- uncomment line 3 in src/Transactions.js (// import Statement from '../src/Statement.js')
- In the terminal run 'npm test'
- To see coverage run jest --coverage

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
