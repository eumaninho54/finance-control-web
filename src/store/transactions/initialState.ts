import { ITransactions } from "./interfaces";

export const initialState: ITransactions = {
  input: {
    user: '',
    value: 0,
    release_date: new Date()
  },
  output: {
    user: '',
    value: 0,
    release_date: new Date()
  },
  transactions: []
}
