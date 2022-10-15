import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { adminAsyncBuilder } from "./thunks";

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    adminAsyncBuilder(builder)
  }
})

export default adminSlice.reducer;
export const {} = adminSlice.actions;
