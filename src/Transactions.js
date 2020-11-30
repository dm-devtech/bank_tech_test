export default class Transactions {

  constructor() {
    this.allTransactions = []
  }

  deposit(amount, date) {
    this.allTransactions.push({date: date, type: 'deposit', amount: amount})
  }

  withdraw(amount, date) {
    this.allTransactions.push({date: date, type: 'withdraw', amount: amount})
  }

}
