import { FC } from 'react'
import { useAppSelector } from '../../redux/store'
import { ITransactions } from './transactions.props'
import { TransactionsWrapper } from './transactions.styled'
import { selectCurrency } from '../../redux/selectors/currency.selector'

export const Transactions: FC<ITransactions> = ({ transactions }) => {
  const { usd } = useAppSelector(selectCurrency)
  const total = transactions.reduce((acc, item) => acc + Number(item.cost), 0)
  const totalUsd = (total / usd).toFixed(2)


  return (
    <TransactionsWrapper>
      <div className="transactions-list">
        {transactions.map((transaction) => {
          const { date, time, name, cost } = transaction
          const usdCost = (cost / usd).toFixed(2)

          return (
            <div className='transaction-item'>
              <div>Date: {date}</div>
              <div>Time: {time}</div>
              <div>Name: {name}</div>
              <div>Cost: {cost} ₴ ({usdCost} $)</div>
            </div>
          )
        })
        }
      </div>
      <div className='total'>Total: {total} ₴ ({totalUsd} $)</div>
    </TransactionsWrapper >)
}