import axios from "axios";
import { createTransactionProps, ILastInputOutput, ICreateTransaction, IGetTransactions, getTransactionsProps } from "./interface";


export class TransactionService {
  private baseUrl: string = "http://192.168.1.108:3333"

  constructor(
    private token?: string
  ){}
  
  async getTransactions({textFilter}: getTransactionsProps): Promise<IGetTransactions[] | null> {
    const req = await axios.request<IGetTransactions[]>({
      method: "post",
      url: this.baseUrl + "/transactions/",
      headers: { "x-access-token": this.token },
      data: {
        textFilter: textFilter
      }
    }).then((res) => res.data)
      .catch(() => null)

    return req
  }

  async lastInputOutput(): Promise<ILastInputOutput | null> {
    const req = await axios.request<ILastInputOutput>({
      method: "get",
      url: this.baseUrl + "/transactions/last",
      headers: { "x-access-token": this.token }
    }).then((res) => res.data)
      .catch(() => null)

    return req
  }

  async createTransaction({id, reason, valueTransaction}: createTransactionProps): Promise<ICreateTransaction[] | null> {
    const req = await axios.request<ICreateTransaction[]>({
      method: "post",
      url: this.baseUrl + "/transactions/new",
      headers: { "x-access-token": this.token },
      data: {
        id: id,
        reason: reason,
        valueTransaction: valueTransaction
      }
    }).then((res) => res.data)
      .catch(() => null)

    return req
  } 
}

