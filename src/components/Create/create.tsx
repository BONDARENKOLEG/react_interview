import { CreateWrapper } from "./create.styled"
import { SetTransactionsProps } from './create.props'
import { ChangeEvent, FC, useCallback, useState } from 'react'

export const Create: FC<SetTransactionsProps> = ({ transactions, setTransactions }) => {
  const [name, setName] = useState<string>('')
  const [cost, setCost] = useState<number>(0)

  const createTransaction = useCallback(() => {
    const newTransaction = {
      date: new Date(),
      name,
      cost
    }

    const updatedTransactions = [...transactions]
    updatedTransactions.unshift(newTransaction)
    setTransactions(updatedTransactions)

  }, [name, cost, transactions, setTransactions])

  return (
    <CreateWrapper>
      <div className='form'>
        <div className='title'>Create transaction</div>
        <div className='label'>Name</div>
        <input
          type="text"
          name='name' className='input'
          onChange={(evt: ChangeEvent<HTMLInputElement>) => setName(evt.target.value)} />

        <div className='label'>Cost</div>
        <input
          type="number"
          name='cost'
          className='input'
          onChange={(evt: ChangeEvent<HTMLInputElement>) => setCost(Number(evt.target.value))} />

        <button type='button' className='create-button' onClick={createTransaction}>Create</button>
      </div>
    </CreateWrapper>)
}