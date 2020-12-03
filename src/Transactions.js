'use strict'

import Statement from '../src/Statement.js'

export default class Transactions {

  constructor(newStatement = new Statement) {
    this.allTransactions = []
    this.balance = 0
    this.balancePerTransaction = []
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

  #balanceUpdate() {
    let i;
    for (i = 0; i < this.allTransactions.length; i++) {
      const transaction = this.allTransactions[i];
      if(transaction.type === 'deposit') {
        let statementBalance = this.balance += transaction.amount
        this.balancePerTransaction.push(statementBalance)
      }else if(transaction.type === 'withdraw') {
        let statementBalance = this.balance -= transaction.amount
        this.balancePerTransaction.push(statementBalance)
      }
    }
  }

  getBankStatement() {
    this.#balanceUpdate()
    return this.newStatement.print(this.allTransactions, this.balancePerTransaction)
  }

}
