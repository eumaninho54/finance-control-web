import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/auth";
import { UsersService } from "../../../services/users";
import { initialState } from "../initialState";
import { IUsersService } from "../../../services/users/interface";
import { IUsers } from "../interfaces";


export const getUsers = createAsyncThunk("getUsers", async (): Promise<IUsersService[] | null> => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const req = await new UsersService(token).getUsers()

  if(req == null){
    return req
  }

  return req
})

export const getUsersBuilder = (builder: ActionReducerMapBuilder<IUsers[]>) => {
  builder
    .addCase(getUsers.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = payload
      return state
    })
    .addCase(getUsers.pending, (state, { payload }) => {})
    .addCase(getUsers.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}