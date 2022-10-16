import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/auth";
import { UsersService } from "../../../services/users";
import { initialState } from "../initialState";
import { IUsersService } from "../../../services/users/interface";
import { IUsers } from "../interfaces";


export const createUser = createAsyncThunk("createUser", async ({name, total_money}: {name: string, total_money: number}): Promise<IUsersService[] | null> => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const req = await new UsersService(token).createUser({name, total_money})

  if(req == null){
    return req
  }

  console.log(req[0])

  return req
})

export const createUserBuilder = (builder: ActionReducerMapBuilder<IUsers[]>) => {
  builder
    .addCase(createUser.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = payload
      return state
    })
    .addCase(createUser.pending, (state, { payload }) => {})
    .addCase(createUser.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}