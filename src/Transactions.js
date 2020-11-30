class Transactions {

  constructor() {
    this.transactions = []
  }

  deposit(amount, date) {
    this.transactions.push({date: date, type: 'deposit', amount: amount})
  }

}
