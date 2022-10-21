interface Transaction {
  id: number;
  name: string;
  reason: string;
  value: number;
  release_date: Date;
}

export interface ITransactions {
  input: {
    user: string;
    value: number;
    release_date: Date;
  },
  output: {
    user: string;
    value: number;
    release_date: Date;
  },
  transactions: Transaction[]
}