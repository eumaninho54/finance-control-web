export interface IUsers {
  id: number;
  name: string;
  input_value: number;
  output_value: number;
  last_value: number;
  last_reason: string;
  total_money: number;
  transactions: any[];
}