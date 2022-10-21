import axios from "axios";
import { createTransactionProps, IInfoTransactions, ICreateTransaction, ILastTransactions, LastTransactionsProps } from "./interface";


export class TransactionService {
  private baseUrl: string = "http://192.168.1.108:3333"

  constructor(
    private token: string
  ){}
  
  async infoTransactions(): Promise<IInfoTransactions | null> {
    const req = await axios.request<IInfoTransactions>({
      method: "get",
      url: this.baseUrl + "/transactions/info",
      headers: { "x-access-token": this.token }
    }).then((res) => res.data)
    .catch(() => null)
    
    return req
  }

  async lastTransactions({textFilter}: LastTransactionsProps): Promise<ILastTransactions[] | null> {
    const req = await axios.request<ILastTransactions[]>({
      method: "post",
      url: this.baseUrl + "/transactions/last",
      headers: { "x-access-token": this.token },
      data: {
        textFilter: textFilter
      }
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

