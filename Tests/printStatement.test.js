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
    expect(testTransactions.printStatement()).toEqual('date || credit || debit || balance\n14-01-2012 || || 500.00 || -500.00\n')
  })
})
