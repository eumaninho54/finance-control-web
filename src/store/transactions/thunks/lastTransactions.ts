import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { ITransactions } from "../interfaces";
import { TransactionService } from "../../../services/transaction";
import { IInfoTransactions, ILastTransactions, LastTransactionsProps } from "../../../services/transaction/interface";


export const lastTransactions = createAsyncThunk("lastTransactions", async ({textFilter}: LastTransactionsProps): Promise<ILastTransactions[] | null> => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const req = await new TransactionService(token).lastTransactions({textFilter: textFilter})

  if(req == null){
    return req
  }

  return req
})

export const lastTransactionsBuilder = (builder: ActionReducerMapBuilder<ITransactions>) => {
  builder
    .addCase(lastTransactions.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = {...state, transactions: payload}
      return state
    })
    .addCase(lastTransactions.pending, (state, { payload }) => {})
    .addCase(lastTransactions.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}