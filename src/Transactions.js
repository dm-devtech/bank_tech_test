'use strict'

class Transactions {
  #newTransactions;
  #balanceHistory;
  #newStatement;

  constructor(newStatement = new Statement()) {
    this.#newTransactions = []
    this.#balanceHistory = []
    this.#newStatement = newStatement
  }

  #errorMessages(amount, date) {
    if (amount < 0) throw new Error('You cannot enter a negative number')
    if (date.split("").includes("/"||".")) throw new Error('Date format should be DD-MM-YYYY')
  }

  #reformatDate(date) {
    return date.replace("-", "/").replace("-", "/")
  }

  deposit(amount, date) {
    this.#errorMessages(amount, date)
    this.#newTransactions.push({date: this.#reformatDate(date), type: 'deposit', amount: amount, status: "new"})
  }

  withdraw(amount, date) {
    this.#errorMessages(amount, date)
    this.#newTransactions.push({date: this.#reformatDate(date), type: 'withdraw', amount: amount, status: "new"})
  }

  balanceUpdate() {
    let balance = 0
    return this.#newTransactions.map((transaction, index) => {
      if (transaction.type === 'deposit' && transaction.status === "new") {
        this.#updateTransactionStatus(transaction)
        balance += transaction.amount
        this.#addBalanceToHistory(balance)
        return this.#balanceHistory[index]
      } else if (transaction.type === 'withdraw' && transaction.status === "new") {
        this.#updateTransactionStatus(transaction)
        balance -= transaction.amount
        this.#addBalanceToHistory(balance)
        return this.#balanceHistory[index]
      } else if (transaction.status === "historical")
        return this.#balanceHistory[index]
    })
  }

  #addBalanceToHistory(balance){
    this.#balanceHistory.push(balance)
  }

  #updateTransactionStatus(transaction) {
    transaction['status'] = "historical"
  }

  getBankStatement() {
    const balancePerTransaction = this.balanceUpdate()
    return this.#newStatement.print(this.#newTransactions, balancePerTransaction)
  }

}
