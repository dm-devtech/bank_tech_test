export default class Transactions {

  constructor() {
    this.allTransactions = []
    this.statementHeader = "date || credit || debit || balance\n"
    this.statementDetail = ""
    this.balance = 0
  }

  deposit(amount, date) {
    this.allTransactions.push({date: date, type: 'deposit', amount: amount})
  }

  withdraw(amount, date) {
    this.allTransactions.push({date: date, type: 'withdraw', amount: amount})
  }

  balanceUpdate() {
    var i;
    for (i = 0; i < this.allTransactions.length; i++) {
      if(this.allTransactions[i]['type'] === 'withdraw') {
        this.balance -= Number(this.allTransactions[i]['amount'])
      } else if(this.allTransactions[i]['type'] === 'deposit') {
        this.balance += Number(this.allTransactions[i]['amount'])
      }
    }
  }

  createStatement() {
    var i;
    for (i = 0; i < this.allTransactions.length; i++) {
      if(this.allTransactions[i]['type'] === 'withdraw') {
        this.statementDetail += `${this.allTransactions[i]['date']} || || ${Number(this.allTransactions[i]['amount']).toFixed(2)} || ${Number(this.balance).toFixed(2)}`
      } else if(this.allTransactions[i]['type'] === 'deposit') {
        this.statementDetail += `${this.allTransactions[i]['date']} || ${Number(this.allTransactions[i]['amount']).toFixed(2)} || || ${Number(this.balance).toFixed(2)}`
      }
    }
  }

  printStatement() {
    this.balanceUpdate()
    this.createStatement()
    return this.statementHeader+this.statementDetail
  }

}
