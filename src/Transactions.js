'use strict'

import Statement from '../src/Statement.js'

export default class Transactions {

  constructor(newStatement = new Statement()) {
    this.allTransactions = []
    this.balance = 0
    this.newStatement = newStatement
  }

  errorMessages(amount, date) {
    if (amount < 0) throw new Error('You cannot enter a negative number')
    if (date.split("").includes("/"||".")) throw new Error('Date format should be DD-MM-YYYY')
  }

  reformatDate(date) {
    return date.replace("-", "/").replace("-", "/")
  }

  deposit(amount, date) {
    this.errorMessages(amount, date)
    this.allTransactions.push({date: this.reformatDate(date), type: 'deposit', amount: amount})
  }

  withdraw(amount, date) {
    this.errorMessages(amount, date)
    this.allTransactions.push({date: this.reformatDate(date), type: 'withdraw', amount: amount})
  }

  balanceUpdate() {
    return this.allTransactions.map((transaction) => {
      if (transaction.type === 'deposit') {
        return this.balance += transaction.amount
      } else if (transaction.type === 'withdraw') {
        return this.balance -= transaction.amount
      }
    })
  }

  getBankStatement() {
    const balancePerTransaction = this.balanceUpdate()
    return this.newStatement.print(this.allTransactions, balancePerTransaction)
  }

}
