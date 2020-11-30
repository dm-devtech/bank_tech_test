import Transactions from '../src/Transactions.js'

beforeEach(() => {
  const testtransactions = new Transactions;
});

  test('deposit transaction is saved to transactions object', () =>{
    const testTransactions = new Transactions;
    testTransactions.deposit(1000, '10-01-2012')
    expect(testTransactions.allTransactions[0]['date']).toBe('10-01-2012')
    expect(testTransactions.allTransactions[0]['type']).toBe('deposit')
    expect(testTransactions.allTransactions[0]['amount']).toBe(1000)
  })
