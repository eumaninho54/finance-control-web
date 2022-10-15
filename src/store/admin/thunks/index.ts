import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { IAdmin } from "../interfaces";
import { loginBuilder } from "./login";
import { verifyToken, verifyTokenBuilder } from "./verifyToken";

export const adminAsyncBuilder = (builder: ActionReducerMapBuilder<IAdmin>) => {
  verifyTokenBuilder(builder),
  loginBuilder(builder)
}