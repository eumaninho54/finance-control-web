import currency from "currency.js"

export const currencyjs = (value: number) => {
  return String(currency(value, {decimal: ',', separator: ".", symbol: "R$" }).format())
}