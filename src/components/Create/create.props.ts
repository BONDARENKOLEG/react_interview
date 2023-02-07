import { TransactionsSchema } from "../../db/schema";

export interface SetTransactionsProps {
  transactions: TransactionsSchema[]
  setTransactions: (transactions: TransactionsSchema[]) => void
}