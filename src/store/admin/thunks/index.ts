import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { IAdmin } from "../interfaces";
import { verifyToken } from "./verifyToken";

export const adminAsyncBuilder = (builder: ActionReducerMapBuilder<IAdmin>) => {
  builder
    .addCase(verifyToken.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = payload
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