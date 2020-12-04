'use strict'

import Statement from '../src/Statement.js'

export default class Transactions {

  constructor(newStatement = new Statement()) {
    this.allTransactions = []
    this.balance = 0
    this.newStatement = newStatement
  }

  deposit(amount, date) {
    if (amount < 0) throw new Error('You cannot enter a negative number');
    if (date.split("").includes("/"||".")) throw new Error('Date format should be DD-MM-YYYY');
    let newDateFormat = date.replace("-", "/").replace("-", "/")
    this.allTransactions.push({date: newDateFormat, type: 'deposit', amount: amount})
  }

  withdraw(amount, date) {
    if (amount < 0) throw new Error('You cannot enter a negative number')
    if (date.split("").includes("/"||".")) throw new Error('Date format should be DD-MM-YYYY')
    let newDateFormat = date.replace("-", "/").replace("-", "/")
    this.allTransactions.push({date: newDateFormat, type: 'withdraw', amount: amount})
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
