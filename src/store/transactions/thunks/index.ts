import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ITransactions } from "../interfaces";
import { infoTransactionsBuilder } from "./infoTransactions";
import { lastTransactionsBuilder } from "./lastTransactions";

export const transactionsAsyncBuilder = (builder: ActionReducerMapBuilder<ITransactions>) => {
  infoTransactionsBuilder(builder),
  lastTransactionsBuilder(builder)
}