

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

export interface ILastInputOutput {
  input: number;
  output: number;
}

export interface createTransactionProps {
  id: number;
  reason: string
  valueTransaction: number
}
