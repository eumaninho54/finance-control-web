import axios from "axios";
import { createUserProps, getTableRegistrationProps, IUsersService } from "./interface";


export class UsersService {
  private baseUrl: string = "http://192.168.1.108:3333"

  constructor(
    private token?: string
  ){}

  async createUser({name, total_money}: createUserProps): Promise<IUsersService[] | null> {
    const req = await axios.request<IUsersService[]>({
      method: "post",
      url: this.baseUrl + "/users/new",
      headers: { "x-access-token": this.token },
      data: {
        name: name,
        total_money: total_money
      }
    }).then((res) => res.data)
      .catch(() => null)

    return req
  } 
}

