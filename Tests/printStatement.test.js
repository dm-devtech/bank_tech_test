import Transactions from '../src/Transactions.js'
import Statement from '../src/Statement.js'

describe('PrintStatement class', () => {
  test('returns correct header format from statementHeader variable', () =>{
    const newStatement = new Statement;
    expect(newStatement.statementHeader).toEqual("date || credit || debit || balance\n")
  })
})

describe('testing print function', () => {
  test('testing print format is correct with one withdrawal transaction', () =>{
    const testTransactions = new Transactions;
    const newStatement = new Statement
    testTransactions.withdraw(500, '14-01-2012')
    expect(testTransactions.getBankStatement()).toEqual('date || credit || debit || balance\n14-01-2012 || || 500.00 || -500.00\n')
  })

  test('testing printed statement is correct with multiple transactions', () =>{
    const testTransactions = new Transactions;
    const newStatement = new Statement
    testTransactions.deposit(1000, '10-01-2012')
    testTransactions.deposit(2000, '13-01-2012')
    testTransactions.withdraw(500, '14-01-2012')
    expect(testTransactions.getBankStatement()).toEqual('date || credit || debit || balance\n14-01-2012 || || 500.00 || 2500.00\n13-01-2012 || 2000.00 || || 3000.00\n10-01-2012 || 1000.00 || || 1000.00\n')
  })
})
