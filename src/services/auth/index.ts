import axios from "axios";
import { IAuthService, loginProps } from "./interface";


export class AuthService {
  private baseUrl: string = "http://192.168.1.108:3333"

  constructor(
    private token?: string
  ){}

  async verifyToken(): Promise<IAuthService | null> {
    const req = await axios.request<IAuthService>({
      method: "post",
      url: this.baseUrl + "/auth",
      headers: { "x-access-token": this.token }
    }).then((res) => res.data)
      .catch(() => null)

    return req
  }

  async login({username, password}: loginProps): Promise<IAuthService | null> {
    const req = await axios.request<IAuthService>({
      method: "post",
      url: this.baseUrl + "/auth/login",
      data: {
        username: username,
        password: password
      }
    }).then((res) => res.data)
      .catch(() => null)

    return req
  } 
}

