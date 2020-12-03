'use strict'

export default class Statement {

  decimalise(amount) {
    return Number(amount).toFixed(2)
  }

  print(allTransactions, balancePerTransaction) {
    let [statementHeader, statementDetail] = ["date || credit || debit || balance\n", ""]
    for (let i = allTransactions.length - 1; i >= 0; i--) {
      const transaction = allTransactions[i];
      if(transaction.type === 'withdraw') {
        statementDetail += `${transaction.date} || || ${this.decimalise(transaction.amount)} || ${this.decimalise(balancePerTransaction[i])}\n`
      } else if(allTransactions[i]['type'] === 'deposit') {
        statementDetail += `${transaction.date} || ${this.decimalise(transaction.amount)} || || ${this.decimalise(balancePerTransaction[i])}\n`
      }
    }
    return statementHeader+statementDetail
  }

}
