import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../../services/auth";
import { initialState } from "../initialState";
import { IAdmin } from "../interfaces";


export const verifyToken = createAsyncThunk("verifyToken", async () => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  return await new AuthService(token).verifyToken()
})

export const verifyTokenBuilder = (builder: ActionReducerMapBuilder<IAdmin>) => {
  builder
    .addCase(verifyToken.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = {...payload, loading: false}
      return state
    })
    .addCase(verifyToken.pending, (state, { payload }) => {
      state.loading = true
    })
    .addCase(verifyToken.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}