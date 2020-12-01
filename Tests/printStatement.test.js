'use strict'

import Transactions from '../src/Transactions.js'
import Statement from '../src/Statement.js'

describe('PrintStatement class', () => {
  test('returns correct header format from statementHeader variable', () =>{
    const newStatement = new Statement;
    expect(newStatement.statementHeader).toEqual("date || credit || debit || balance\n")
  })
})
