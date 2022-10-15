import { configureStore } from "@reduxjs/toolkit"
import adminSlice from "./admin/slice"

export const store = configureStore({
  reducer: {
    admin: adminSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})  

export type AppDispatch = typeof store.dispatch