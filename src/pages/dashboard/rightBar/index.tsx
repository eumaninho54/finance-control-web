import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { BoxText, BoxValueTransaction, CardTitle, ContentTransaction, LetterTransaction, RightBarBg, RightBarContent } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector } from '../../../store/hooks/useAppSelector';
import { currencyjs } from '../../../utils/currencyjs';
import { lastTransactions } from '../../../store/transactions/thunks/lastTransactions';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';


const RightBar: React.FC = () => {
  const useDispatch = useAppDispatch()
  const transactions = useAppSelector((store) => store.transactions)
  const [filterTransactions, setFilterTransactions] = useState("")

  const renderBoxTransaction = () => {
    return transactions.transactions.map((transaction) => {
      return (
        <ContentTransaction key={transaction.id}>
          <LetterTransaction>
            <div>
              <span>{transaction.name.substring(0,1).toUpperCase()}</span>
            </div>
          </LetterTransaction>

          <BoxText>
            <h1>{transaction.name}</h1>
            <span>{transaction.reason}</span>
          </BoxText>

          <BoxValueTransaction>
            <span>{String(currencyjs(transaction.value))}</span>
          </BoxValueTransaction>
        </ContentTransaction>
      )
    })
  }

  useEffect(() => {
    useDispatch(lastTransactions({textFilter: filterTransactions}))
  }, [filterTransactions])

  return (
    <RightBarBg>
      <RightBarContent>
        <TextField
          value={filterTransactions}
          onChange={(event) => setFilterTransactions(event.target.value)}
          style={{ marginBottom: 40, fontSize: 11 }}
          placeholder="Pesquise"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }} />

        <CardTitle>Movimentações</CardTitle>

        {transactions.transactions[0] 
          ? renderBoxTransaction()
          : null
        }
      </RightBarContent>
    </RightBarBg>

  )
}

export default RightBar;