import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/auth";
import { UsersService } from "../../../services/users";
import { initialState } from "../initialState";
import { IUsersService } from "../../../services/users/interface";
import { IUsers } from "../interfaces";


export const deleteUsers = createAsyncThunk("deleteUsers", async ({id}: {id: number[]}): Promise<IUsersService[] | null> => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const req = await new UsersService(token).deleteUsers({id})

  if(req == null){
    return req
  }

  return req
})

export const deleteUsersBuilder = (builder: ActionReducerMapBuilder<IUsers[]>) => {
  builder
    .addCase(deleteUsers.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = payload
      return state
    })
    .addCase(deleteUsers.pending, (state, { payload }) => {})
    .addCase(deleteUsers.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}