describe('Transactions class', () => {
  var testtransactions

  beforeEach(() => {
    testtransactions = new Transactions;
  });

  describe('deposit function', () => {
    it('deposit transaction is saved to transactions object', () => {
      testtransactions.deposit(1000, '10-01-2012')
      expect(testtransactions.allTransactions).toEqual([{date: '10-01-2012', type: 'deposit', amount: 1000}])
    })

    it('multiple deposits save to object correctly', () => {
      testtransactions.deposit(1000, '10-01-2012')
      testtransactions.deposit(7000, '18-01-2012')
      expect(testtransactions.allTransactions).toEqual([{date: '10-01-2012', type: 'deposit', amount: 1000}, {date: '18-01-2012', type: 'deposit', amount: 7000}])
    })

  })

})
