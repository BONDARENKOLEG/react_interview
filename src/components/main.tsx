import { Create } from './Create'
import { Header } from './Header'
import { FC, useState } from 'react'
import { MainWrapper } from './main.styled'
import { initialDB } from '../db/initaialDb'
import { Transactions } from './Transactions'

export const Main: FC = () => {
  const [transactions, setTransactions] = useState(initialDB)

  return <>
    <Header />
    <MainWrapper>
      <Create transactions={transactions} setTransactions={setTransactions} />
      <Transactions transactions={transactions} setTransactions={setTransactions} />
    </MainWrapper>

  </>
}