import Transactions from '../src/Transactions.js'
import PrintStatement from '../src/PrintStatement.js'

describe('tests print class exists', () => {
  test('newStatement is an instance of the PrintStatement class', () =>{
    const newStatement = new PrintStatement;
    expect(newStatement).toBeInstanceOf(PrintStatement)
  })
})
