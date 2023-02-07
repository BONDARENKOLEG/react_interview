import { v4 as uuidv4 } from 'uuid';
import { FC, useCallback } from 'react'
import { useAppSelector } from '../../redux/store'
import { ITransactions } from './transactions.props'
import { TransactionsWrapper } from './transactions.styled'
import { selectCurrency } from '../../redux/selectors/currency.selector'

export const Transactions: FC<ITransactions> = ({ transactions, setTransactions }) => {
  const { usd } = useAppSelector(selectCurrency)
  const total = transactions.reduce((acc, item) => acc + Number(item.cost), 0)
  const totalUsd = (total / usd).toFixed(2)

  const deleteHandler = useCallback((index: number) => {
    const transactionsToDelete = [...transactions]
    transactionsToDelete.splice(index, 1)
    setTransactions(transactionsToDelete)
  }, [transactions, setTransactions])

  return (
    <TransactionsWrapper>
      <div className="transactions-list">
        {transactions.map((transaction, index) => {
          const { date, time, name, cost } = transaction
          const usdCost = (cost / usd).toFixed(2)

          return (
            <div className='transaction-item' key={uuidv4()}>
              <div>
                <div>Date: {date}</div>
                <div>Time: {time}</div>
                <div>Name: {name}</div>
                <div>Cost: {cost} ₴ ({usdCost} $)</div>
              </div>
              <button type='button' className='delete-button' onClick={() => deleteHandler(index)}>Delete</button>
            </div>
          )
        })
        }
      </div>
      <div className='total'>Total: {total} ₴ ({totalUsd} $)</div>
    </TransactionsWrapper >)
}