describe('Transactions class', function() {
  var testtransactions

  beforeEach(function() {
    testtransactions = new Transactions;
  });

  describe('deposit function', function() {
    it('deposit transaction is saved to transactions object', function() {
      testtransactions.deposit(1000, '10-01-2012')
      expect(testtransactions.transactions).toEqual([{date: '10-01-2012', type: 'deposit', amount: 1000}])
    })

  })

})
