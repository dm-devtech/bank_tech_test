import Transactions from '../src/Transactions.js'
import Statement from '../src/Statement.js'

describe('testing Transactions class', () => {
  let testTransactions;

  beforeEach(() => {
    testTransactions = new Transactions();
  });

  describe('testing getStatement function', () => {
    test('testing newStatement.print() is called', () =>{
      const statement = new Statement()
      const spy = jest.spyOn(statement, 'print')
      const testTransactions = new Transactions(statement)
      testTransactions.getBankStatement()
      expect(spy).toHaveBeenCalled();
    })

    test('testing print format is correct with one deposit transaction', () =>{
      const statement = new Statement()
      const testTransactions = new Transactions(statement)
      const spy = jest.spyOn(testTransactions, 'getBankStatement')
      testTransactions.deposit(2000, '11-01-2012')

      expect(testTransactions.getBankStatement()).toEqual('date || credit || debit || balance\n11/01/2012 || 2000.00 || || 2000.00\n')
    })

    test('testing printed statement is correct with multiple transactions', () =>{
      testTransactions.deposit(1000, '10-01-2012')
      testTransactions.deposit(2000, '13-01-2012')
      testTransactions.withdraw(500, '14-01-2012')
      expect(testTransactions.getBankStatement()).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00\n')
    })
  })

  describe('Edge cases', () => {
    test('error raises when negative number entered as input to withdraw function', () =>{
      expect(() => {testTransactions.withdraw(-500, '14-01-2012')}).toThrowError('You cannot enter a negative number');
    })

    test('error raises when negative number entered as input to deposit function', () =>{
      expect(() => {testTransactions.deposit(-500, '14-01-2012')}).toThrowError('You cannot enter a negative number');
    })

    test('entering floating point numbers as inputs to withdraw and deposit works correctly', () =>{
      testTransactions.deposit(1000.50, '10-01-2012')
      testTransactions.deposit(2000.75, '13-01-2012')
      testTransactions.withdraw(500.20, '14-01-2012')
      expect(testTransactions.getBankStatement()).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.20 || 2501.05\n13/01/2012 || 2000.75 || || 3001.25\n10/01/2012 || 1000.50 || || 1000.50\n')
    })

    test('error raised when date format entered in incorrect format to withdraw function', () =>{
      expect(() => {testTransactions.withdraw(500, '14/01/2012')}).toThrowError('Date format should be DD-MM-YYYY');
    })

    test('error raised when date format entered in incorrect format to deposit function', () =>{
      expect(() => {testTransactions.deposit(500, '14/01/2012')}).toThrowError('Date format should be DD-MM-YYYY');
    })
  })

})
