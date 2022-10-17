

export interface IUsersService {
  id: number;
  name: string;
  input_value: number,
  output_value: number,
  last_value: number,
  last_reason: string;
  total_money: number,
  transactions: any[]
}

export interface createUserProps {
  name: string;
  initialValue: number;
}

export interface deleteUsersProps{
  id: number[]
}
