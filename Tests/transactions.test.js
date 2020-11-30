import Transactions from '../src/Transactions.js'

  test('deposit transaction is saved to transactions object', () =>{
    const testTransactions = new Transactions;
    testTransactions.deposit(1000, '10-01-2012')
    expect(testTransactions.allTransactions[0]['date']).toBe('10-01-2012')
    expect(testTransactions.allTransactions[0]['type']).toBe('deposit')
    expect(testTransactions.allTransactions[0]['amount']).toBe(1000)
  })

  test('tests multiple deposits', () =>{
    const testTransactions = new Transactions
    testTransactions.deposit(2000, '11-01-2012')
    testTransactions.deposit(7000, '18-01-2012')
    expect(testTransactions.allTransactions[0]['date']).toBe('11-01-2012')
    expect(testTransactions.allTransactions[0]['type']).toBe('deposit')
    expect(testTransactions.allTransactions[0]['amount']).toBe(2000)
    expect(testTransactions.allTransactions[1]['date']).toBe('18-01-2012')
    expect(testTransactions.allTransactions[1]['type']).toBe('deposit')
    expect(testTransactions.allTransactions[1]['amount']).toBe(7000)
  })
