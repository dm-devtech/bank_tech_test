'use strict'

import Statement from './Statement.js'

export default class Transactions {

  constructor(newStatement = new Statement) {
    this.allTransactions = []
    this.statementHeader = "date || credit || debit || balance\n"
    this.statementDetail = ""
    this.balance = 0
    this.balancePerTransaction = []
    this.newStatement = newStatement
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
      if(this.allTransactions[i]['type'] === 'deposit') {
        let statementBalance = this.balance += this.allTransactions[i]['amount']
        this.balancePerTransaction.push(statementBalance)
      }else if(this.allTransactions[i]['type'] === 'withdraw') {
        let statementBalance = this.balance -= this.allTransactions[i]['amount']
        this.balancePerTransaction.push(statementBalance)
      }
    }
  }

  createStatement() {
    var i;
    for (i = 0; i < this.allTransactions.length; i++) {
      if(this.allTransactions[i]['type'] === 'withdraw') {
        this.statementDetail += `${this.allTransactions[i]['date']} || || ${Number(this.allTransactions[i]['amount']).toFixed(2)} || ${Number(this.balancePerTransaction[i]).toFixed(2)}\n`
      } else if(this.allTransactions[i]['type'] === 'deposit') {
        this.statementDetail += `${this.allTransactions[i]['date']} || ${Number(this.allTransactions[i]['amount']).toFixed(2)} || || ${Number(this.balancePerTransaction[i]).toFixed(2)}\n`
      }
    }
  }

  printStatement() {
    this.balanceUpdate()
    return this.newStatement.print(this.allTransactions, this.balancePerTransaction)
  }

}
