import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { usersAsyncBuilder } from "./thunks";

const usersSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    usersAsyncBuilder(builder)
  }
})

export default usersSlice.reducer;
export const {} = usersSlice.actions;
