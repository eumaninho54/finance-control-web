import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUsers } from "../interfaces";
import { getUsersBuilder } from "./getUsers";
import { createUserBuilder } from "./createUser";
import { createTransactionBuilder } from "./createTransaction";

export const usersAsyncBuilder = (builder: ActionReducerMapBuilder<IUsers[]>) => {
  getUsersBuilder(builder),
  createUserBuilder(builder),
  createTransactionBuilder(builder)
}