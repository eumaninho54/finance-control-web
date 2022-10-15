import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/auth";
import { initialState } from "../initialState";
import { IAdmin } from "../interfaces";


export const login = createAsyncThunk("login", async ({username, password}: {username: string, password: string}) => {

  const req = await new AuthService().login(username, password)

  if(req != null){
    localStorage.setItem("token", req.token)
    return req
  }

  return null
})

export const loginBuilder = (builder: ActionReducerMapBuilder<IAdmin>) => {
  builder
    .addCase(login.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = {...payload, loading: false}
      return state
    })
    .addCase(login.pending, (state, { payload }) => {
      state.loading = true
    })
    .addCase(login.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}