'use strict'

import Statement from './Statement.js'

export default class Transactions {

  constructor(newStatement = new Statement) {
    this.allTransactions = []
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

  #balanceUpdate() {
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

  getBankStatement() {
    this.#balanceUpdate()
    return this.newStatement.print(this.allTransactions, this.balancePerTransaction)
  }

}
