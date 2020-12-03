'use strict'

export default class Statement {

  constructor() {
    this.statementHeader = "date || credit || debit || balance\n"
    this.statementDetail = ""
  }

  print(allTransactions, balancePerTransaction) {
    for (let i = allTransactions.length - 1; i >= 0; i--) {
      const transaction = allTransactions[i];
      if(transaction.type === 'withdraw') {
        this.statementDetail += `${transaction.date} || || ${Number(transaction.amount).toFixed(2)} || ${Number(balancePerTransaction[i]).toFixed(2)}\n`
      } else if(allTransactions[i]['type'] === 'deposit') {
        this.statementDetail += `${transaction.date} || ${Number(transaction.amount).toFixed(2)} || || ${Number(balancePerTransaction[i]).toFixed(2)}\n`
      }
    }
    return this.statementHeader+this.statementDetail
  }

}
