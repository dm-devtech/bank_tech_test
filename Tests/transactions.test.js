import Transactions from '../src/Transactions.js'

beforeEach(() => {
  const testtransactions = new Transactions;
});

test('deposit transaction is saved to transactions object', () =>{
  const testTransactions = new Transactions;
  const deposit = testTransactions.deposit(1000, '10-01-2012')
  const allTransactions = testTransactions.allTransactions
  expect(allTransactions[0]['date']).toBe('10-01-2012')
  expect(allTransactions[0]['type']).toBe('deposit')
  expect(allTransactions[0]['amount']).toBe(1000)
})
