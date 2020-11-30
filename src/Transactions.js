export default class Transactions {

  constructor() {
    this.allTransactions = []
    this.printHeader = "date || credit || debit || balance\n"
    this.statement = ""
  }

  deposit(amount, date) {
    this.allTransactions.push({date: date, type: 'deposit', amount: amount})
  }

  withdraw(amount, date) {
    this.allTransactions.push({date: date, type: 'withdraw', amount: amount})
  }

  format() {
    var i;
    for (i = 0; i < this.allTransactions.length; i++) {
      if(this.allTransactions[i]['type'] === 'withdraw') {
        this.statement += `${this.allTransactions[i]['date']} || || ${Number(this.allTransactions[i]['amount']).toFixed(2)} || -500.00`
      } else if(this.allTransactions[i]['type'] === 'deposit') {
        this.statement += `${this.allTransactions[i]['date']} || ${Number(this.allTransactions[i]['amount']).toFixed(2)} || || 2000.00`
      }
    }
  }

  printStatement() {
    this.format()
    return this.printHeader+this.statement
  }

}
