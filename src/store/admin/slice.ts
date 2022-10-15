import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { verifyToken } from "./thunks/verifyToken"
import { initialState } from "./initialState"
import { adminAsyncBuilder } from "./thunks";

const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {},
  extraReducers: adminAsyncBuilder
})

export default adminSlice.reducer;
export const {} = adminSlice.actions;
