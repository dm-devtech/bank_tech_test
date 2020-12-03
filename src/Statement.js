'use strict'

export default class Statement {

  constructor() {
    this.statementHeader = "date || credit || debit || balance\n"
    this.statementDetail = ""
  }

  decimalise(amount) {
    return Number(amount).toFixed(2)
  }

  print(allTransactions, balancePerTransaction) {
    for (let i = allTransactions.length - 1; i >= 0; i--) {
      const transaction = allTransactions[i];
      if(transaction.type === 'withdraw') {
        this.statementDetail += `${transaction.date} || || ${this.decimalise(transaction.amount)} || ${this.decimalise(balancePerTransaction[i])}\n`
      } else if(allTransactions[i]['type'] === 'deposit') {
        this.statementDetail += `${transaction.date} || ${this.decimalise(transaction.amount)} || || ${this.decimalise(balancePerTransaction[i])}\n`
      }
    }
    return this.statementHeader+this.statementDetail
  }

}
