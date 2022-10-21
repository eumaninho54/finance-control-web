import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { transactionsAsyncBuilder } from "./thunks";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    transactionsAsyncBuilder(builder)
  }
})

export default transactionsSlice.reducer;
export const {} = transactionsSlice.actions;
