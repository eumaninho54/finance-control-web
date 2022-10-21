import { configureStore } from "@reduxjs/toolkit"
import adminSlice from "./admin/slice"
import usersSlice from "./users/slice"
import transactionsSlice from "./transactions/slice"

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    users: usersSlice,
    transactions: transactionsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
}) 