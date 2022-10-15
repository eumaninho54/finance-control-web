import { createAsyncThunk } from "@reduxjs/toolkit";
import { VerifyTokenService } from "../../../services/verifyToken";


export const verifyToken = createAsyncThunk("verifyToken", async () => {
  const token = localStorage.getItem("token")

  if(token == null) {
    localStorage.removeItem("token")
    return null
  }

  const newAdmin = await new VerifyTokenService(token).handle()

  return {...newAdmin, loading: false}
})