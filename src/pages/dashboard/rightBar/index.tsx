import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BoxText, BoxValueTransaction, CardTitle, ContentTransaction, LetterTransaction, RightBarBg, RightBarContent } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { TransactionService } from '../../../services/transaction';
import { useAppSelector } from '../../../store/hooks/useAppSelector';
import { IGetTransactions } from '../../../services/transaction/interface';


const RightBar: React.FC = () => {
  const admin = useAppSelector((store) => store.admin)
  const [lastTransactions, setLastTransactions] = useState<IGetTransactions[]>([])
  const [filterTransactions, setFilterTransactions] = useState("")

  const renderBoxTransaction = () => {
    return lastTransactions.map((transaction) => {
      return (
        <ContentTransaction>
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
            <span>R$ {transaction.value}</span>
          </BoxValueTransaction>
        </ContentTransaction>
      )
    })
  }

  useEffect(() => {
    const initial = async () => {
      const reqTransactions = await new TransactionService(admin.token).getTransactions()
      reqTransactions == null
        ? setLastTransactions([])
        : setLastTransactions(reqTransactions)

    }
    initial()
  }, [])

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

        {lastTransactions[0] 
          ? renderBoxTransaction()
          : null
        }
      </RightBarContent>
    </RightBarBg>

  )
}

export default RightBar;