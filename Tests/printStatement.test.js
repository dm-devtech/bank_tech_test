'use strict'

import Transactions from '../src/Transactions.js'
import PrintStatement from '../src/PrintStatement.js'

describe('PrintStatement class', () => {
  test('returns correct header format from statementHeader variable', () =>{
    const newStatement = new PrintStatement;
    expect(newStatement.statementHeader).toEqual("date || credit || debit || balance\n")
  })
})
