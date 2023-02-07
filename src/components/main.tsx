import { Header } from './Header'
import { FC, useState } from 'react'
import { initialDB } from '../db/initaialDb'
import { Transactions } from './Transactions'

export const Main: FC = () => {
  const [transactions, setTransactions] = useState(initialDB)

  return <>
    <Header />
    <div>
      <Transactions transactions={transactions} />
    </div>

  </>
}