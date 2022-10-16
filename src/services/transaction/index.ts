import axios from "axios";
import { createTransactionProps, ITransactionsService } from "./interface";


export class TransactionService {
  private baseUrl: string = "http://192.168.1.108:3333"

  constructor(
    private token?: string
  ){}

  async createTransaction({id, reason, valueTransaction}: createTransactionProps): Promise<ITransactionsService[] | null> {
    const req = await axios.request<ITransactionsService[]>({
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

