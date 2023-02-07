import { TransactionsSchema } from "../../db/schema"

export interface ITransactions {
  transactions: TransactionsSchema[],
  setTransactions: (transactions: TransactionsSchema[]) => void
}