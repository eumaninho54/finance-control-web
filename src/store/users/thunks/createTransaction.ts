import { TransactionService } from './../../../services/transaction/index';
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { IUsers } from "../interfaces";
import { ITransactionsService } from '../../../services/transaction/interface';


export const createTransaction = createAsyncThunk("createTransaction", async ({id, reason, valueTransaction}: {id: number, reason: string, valueTransaction: number }): Promise<ITransactionsService[] | null> => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const req = await new TransactionService(token).createTransaction({id, reason, valueTransaction})

  if(req == null){
    return req
  }

  return req
})

export const createTransactionBuilder = (builder: ActionReducerMapBuilder<IUsers[]>) => {
  builder
    .addCase(createTransaction.fulfilled, (state, { payload }) => {
      payload == null 
        ? state = initialState
        : state = payload
      return state
    })
    .addCase(createTransaction.pending, (state, { payload }) => {})
    .addCase(createTransaction.rejected, (state, { payload }) => {
      payload = initialState
      return state
    })
}