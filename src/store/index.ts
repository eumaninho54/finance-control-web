import { configureStore } from "@reduxjs/toolkit"
import adminSlice from "./admin/slice"
import usersSlice from "./users/slice"

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    users: usersSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
}) 