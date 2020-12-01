import Transactions from '../src/Transactions.js'
import Statement from '../src/Statement.js'

describe('testing Transactions class', () => {
  let testTransactions;

  beforeEach(() => {
    testTransactions = new Transactions;
  });

  describe('testing deposit function', () => {
    it('deposit transaction is saved to transactions object', () =>{
      testTransactions.deposit(1000, '10-01-2012')
      expect(testTransactions.allTransactions[0]['date']).toBe('10-01-2012')
      expect(testTransactions.allTransactions[0]['type']).toBe('deposit')
      expect(testTransactions.allTransactions[0]['amount']).toBe(1000.00)
    })

    test('tests multiple deposits', () =>{
      testTransactions.deposit(2000, '11-01-2012')
      testTransactions.deposit(7000, '18-01-2012')
      expect(testTransactions.allTransactions[0]['date']).toBe('11-01-2012')
      expect(testTransactions.allTransactions[0]['type']).toBe('deposit')
      expect(testTransactions.allTransactions[0]['amount']).toBe(2000.00)
      expect(testTransactions.allTransactions[1]['date']).toBe('18-01-2012')
      expect(testTransactions.allTransactions[1]['type']).toBe('deposit')
      expect(testTransactions.allTransactions[1]['amount']).toBe(7000.00)
    })
  })

  describe('testing withdraw function', () => {
    test('withdraw transaction is saved to transactions object', () =>{
      testTransactions.withdraw(500, '14-01-2012')
      expect(testTransactions.allTransactions[0]['date']).toBe('14-01-2012')
      expect(testTransactions.allTransactions[0]['type']).toBe('withdraw')
      expect(testTransactions.allTransactions[0]['amount']).toBe(500.00)
    })

    test('withdraw transaction is saved to transactions object', () =>{
      testTransactions.withdraw(8000, '17-01-2012')
      testTransactions.withdraw(3000, '19-01-2012')
      expect(testTransactions.allTransactions[0]['date']).toBe('17-01-2012')
      expect(testTransactions.allTransactions[0]['type']).toBe('withdraw')
      expect(testTransactions.allTransactions[0]['amount']).toBe(8000.00)
      expect(testTransactions.allTransactions[1]['date']).toBe('19-01-2012')
      expect(testTransactions.allTransactions[1]['type']).toBe('withdraw')
      expect(testTransactions.allTransactions[1]['amount']).toBe(3000.00)
    })
  })

  describe('testing print function', () => {
    test('testing print format is correct with one withdrawal transaction', () =>{
      testTransactions.withdraw(500, '14-01-2012')
      expect(testTransactions.getBankStatement()).toBe('date || credit || debit || balance\n14-01-2012 || || 500.00 || -500.00\n')
    })

    test('testing print format is correct with one deposit transaction', () =>{
      testTransactions.deposit(2000, '11-01-2012')
      expect(testTransactions.getBankStatement()).toBe('date || credit || debit || balance\n11-01-2012 || 2000.00 || || 2000.00\n')
    })

    test('testing printed statement is correct with multiple transactions', () =>{
      testTransactions.deposit(1000, '10-01-2012')
      testTransactions.deposit(2000, '13-01-2012')
      testTransactions.withdraw(500, '14-01-2012')
      expect(testTransactions.getBankStatement()).toBe('date || credit || debit || balance\n14-01-2012 || || 500.00 || 2500.00\n13-01-2012 || 2000.00 || || 3000.00\n10-01-2012 || 1000.00 || || 1000.00\n')
    })
  })

  describe('Edge cases', () => {
    test('error raises when negative number entered as input to withdraw function', () =>{
      expect(() => {testTransactions.withdraw(-500, '14-01-2012')}).toThrowError('You cannot enter a negative number');
    })

    test('error raises when negative number entered as input to deposit function', () =>{
      expect(() => {testTransactions.deposit(-500, '14-01-2012')}).toThrowError('You cannot enter a negative number');
    })
  })

})
