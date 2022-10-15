import axios from "axios";
import { IVerifyToken } from "./interface";


export class VerifyTokenService {
  private baseUrl: string = "http://192.168.1.108:3333"

  constructor(
    private token: string
  ){}

  async handle(): Promise<IVerifyToken | null> {
    const getToken = await axios.request<IVerifyToken>({
      method: "post",
      url: this.baseUrl + "/login",
      headers: { "x-access-token": this.token }
    }).then((res) => res.data)
      .catch(() => null)

    return getToken
  }
}

