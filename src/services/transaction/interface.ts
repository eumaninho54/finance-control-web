

export interface ICreateTransaction {
  id: number;
  name: string;
  input_value: number,
  output_value: number,
  last_value: number,
  last_reason: string;
  total_money: number,
  transactions: any[]
}

export interface IInfoTransactions {
  input: {
    user: string;
    value: number;
    release_date: Date;
  },
  output: {
    user: string;
    value: number;
    release_date: Date;
  }
}

export interface ILastTransactions {
  id: number;
  name: string;
  reason: string;
  value: number;
  release_date: Date;
}

export interface LastTransactionsProps {
  textFilter: string;
}

export interface createTransactionProps {
  id: number;
  reason: string
  valueTransaction: number
}
