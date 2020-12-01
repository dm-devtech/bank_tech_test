import Transactions from '../src/Transactions.js'
import PrintStatement from '../src/PrintStatement.js'

describe('tests print class exists', () => {
  test('deposit transaction is saved to transactions object', () =>{
    const newStatement = new PrintStatement;
    expect(newStatement).toBeInstanceOf(PrintStatement)
  })
})
