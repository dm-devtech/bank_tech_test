import Transactions from '../src/Transactions.js'

describe('testing deposit function', () => {
  test('deposit transaction is saved to transactions object', () =>{
    const testTransactions = new Transactions;
    testTransactions.deposit(1000, '10-01-2012')
    expect(testTransactions.allTransactions[0]['date']).toBe('10-01-2012')
    expect(testTransactions.allTransactions[0]['type']).toBe('deposit')
    expect(testTransactions.allTransactions[0]['amount']).toBe(1000.00)
  })

  test('tests multiple deposits', () =>{
    const testTransactions = new Transactions
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
    const testTransactions = new Transactions;
    testTransactions.withdraw(500, '14-01-2012')
    expect(testTransactions.allTransactions[0]['date']).toBe('14-01-2012')
    expect(testTransactions.allTransactions[0]['type']).toBe('withdraw')
    expect(testTransactions.allTransactions[0]['amount']).toBe(500.00)
  })

  test('withdraw transaction is saved to transactions object', () =>{
    const testTransactions = new Transactions
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
    const testTransactions = new Transactions;
    testTransactions.withdraw(500, '14-01-2012')
    expect(testTransactions.printStatement()).toBe('date || credit || debit || balance\n14-01-2012 || || 500.00 || -500.00')
  })

  test('testing print format is correct with one deposit transaction', () =>{
    const testTransactions = new Transactions;
    testTransactions.deposit(2000, '11-01-2012')
    expect(testTransactions.printStatement()).toBe('date || credit || debit || balance\n11-01-2012 || 2000.00 || || 2000.00')
  })
})
