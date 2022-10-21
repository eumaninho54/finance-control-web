import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { ITransactions } from "../interfaces";
import { TransactionService } from "../../../services/transaction";
import { IInfoTransactions } from "../../../services/transaction/interface";


export const infoTransactions = createAsyncThunk("infoTransactions", async (): Promise<IInfoTransactions | null> => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const req = await new TransactionService(token).infoTransactions()

  if(req == null){
    return req
  }

  return req
})

export const infoTransactionsBuilder = (builder: ActionReducerMapBuilder<ITransactions>) => {
  builder
    .addCase(infoTransactions.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = {...payload, transactions: state.transactions}
      return state
    })
    .addCase(infoTransactions.pending, (state, { payload }) => {})
    .addCase(infoTransactions.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}