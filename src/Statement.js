'use strict'

export default class Statement {

  toDecimal(amount) {
    return Number(amount).toFixed(2)
  }

  print(allTransactions, balancePerTransaction) {
    let [statementHeader, statementDetail] = ["date || credit || debit || balance\n", ""]
    for (let i = allTransactions.length - 1; i >= 0; i--) {
      const transaction = allTransactions[i];
      if(transaction.type === 'withdraw') {
        statementDetail += this.withdrawDetail(transaction, balancePerTransaction, i)
      } else if(allTransactions[i]['type'] === 'deposit') {
        statementDetail += `${transaction.date} || ${this.toDecimal(transaction.amount)} || || ${this.toDecimal(balancePerTransaction[i])}\n`
      }
    }
    return statementHeader+statementDetail
  }

  withdrawDetail(transaction, balancePerTransaction, iteration) {
    return `${transaction.date} || || ${this.toDecimal(transaction.amount)} || ${this.toDecimal(balancePerTransaction[iteration])}\n`
  }



}
