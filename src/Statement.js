export default class Statement {

  constructor() {
    this.statementHeader = "date || credit || debit || balance\n"
    this.statementDetail = ""
  }

  print(allTransactions, balancePerTransaction) {
    var i;
    console.log(allTransactions)
    for (i = 0; i < allTransactions.length; i++) {
      if(allTransactions[i]['type'] === 'withdraw') {
        this.statementDetail += `${allTransactions[i]['date']} || || ${Number(allTransactions[i]['amount']).toFixed(2)} || ${Number(balancePerTransaction[i]).toFixed(2)}\n`
      } else if(allTransactions[i]['type'] === 'deposit') {
        this.statementDetail += `${allTransactions[i]['date']} || ${Number(allTransactions[i]['amount']).toFixed(2)} || || ${Number(balancePerTransaction[i]).toFixed(2)}\n`
      }
    }
    return this.statementHeader+this.statementDetail
  }

}
