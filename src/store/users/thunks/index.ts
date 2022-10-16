import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { IUsers } from "../interfaces";
import { createUserBuilder } from "./createUser";

export const usersAsyncBuilder = (builder: ActionReducerMapBuilder<IUsers[]>) => {
  createUserBuilder(builder)
}