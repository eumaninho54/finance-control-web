import axios from "axios";
import { IAuth } from "./interface";


export class AuthService {
  private baseUrl: string = "http://192.168.1.108:3333"
  static login: any;

  constructor(
    private token?: string
  ){}

  async verifyToken(): Promise<IAuth | null> {
    const req = await axios.request<IAuth>({
      method: "post",
      url: this.baseUrl + "/auth",
      headers: { "x-access-token": this.token }
    }).then((res) => res.data)
      .catch(() => null)

    console.log(req)

    return req
  }

  async login(username: string, password: string): Promise<IAuth | null> {
    const req = await axios.request<IAuth>({
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

