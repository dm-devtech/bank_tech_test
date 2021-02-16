import Statement from '../src/Statement.js'

describe('PrintStatement class', () => {
  let testStatement;

  beforeEach(() => {
    testStatement = new Statement();
  });

  describe('testing print function', () => {
    test('testing print format is correct with one withdrawal transaction', () =>{
      expect(testStatement.print([{date: '14/01/2012', amount: 500, type: 'withdraw'}], [-500])).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || -500.00\n')
    })

    test('testing print format is correct with one deposit transaction', () =>{
      expect(testStatement.print([{date: '14/01/2012', amount: 500, type: 'deposit'}], [500])).toEqual('date || credit || debit || balance\n14/01/2012 || 500.00 || || 500.00\n')
    })

    test('testing printed statement is correct with multiple transactions', () =>{
      expect(testStatement.print([{date: '10/01/2012', amount: 1000, type: 'deposit'}, {date: '13/01/2012', amount: 2000, type: 'deposit'}, {date: '14/01/2012', amount: 500, type: 'withdraw'}], [1000, 3000, 2500])).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00\n')
    })
  })

})
