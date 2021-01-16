import Transactions from '../src/Transactions.js'
import Statement from '../src/Statement.js'

describe('Feature testing', () => {
  let testTransactions;

  beforeEach(() => {
    testTransactions = new Transactions();
  });

  describe('testing getStatement function', () => {
    test('testing newStatement.print() is called', () =>{
      const statement = new Statement()
      testTransactions.deposit(800.00, '10-01-2012')
      testTransactions.deposit(2000.00, '11-01-2012')
      testTransactions.withdraw(400.00, '12-01-2012')
      testTransactions.deposit(5000.00, '13-01-2012')
      testTransactions.withdraw(78.00, '15-01-2012')
      testTransactions.deposit(2000.00, '16-01-2012')
      testTransactions.withdraw(500.0, '18-01-2012')
      testTransactions.withdraw(5.75, '19-01-2012')
      expect(testTransactions.getBankStatement()).toEqual('date || credit || debit || balance\n19/01/2012 || || 5.75 || 8816.25\n18/01/2012 || || 500.00 || 8822.00\n16/01/2012 || 2000.00 || || 9322.00\n15/01/2012 || || 78.00 || 7322.00\n13/01/2012 || 5000.00 || || 7400.00\n12/01/2012 || || 400.00 || 2400.00\n11/01/2012 || 2000.00 || || 2800.00\n10/01/2012 || 800.00 || || 800.00\n')
    })
  })

})
