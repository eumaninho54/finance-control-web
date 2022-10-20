import React, { useEffect, useState } from 'react';
import { Background, Main, HeaderBg, InventoryBg, InventoryContent, CardDiv, InOutValue, CardTitle, CardValue, CardInfo, CardTexts, CardText, Content} from './styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { getUsers } from '../../store/users/thunks/getUsers';
import { currencyjs } from '../../utils/currencyjs';
import { TransactionService } from '../../services/transaction';
import { ILastInputOutput } from '../../services/transaction/interface';
import RightBar from './rightBar';
import { formatDate } from '../../utils/formatDate';

interface DashboardProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Dashboard: React.FC<DashboardProps> = ({ setPositionSelected }) => {
  const useDispatch = useAppDispatch()
  const admin = useAppSelector((store) => store.admin)
  const users = useAppSelector((store) => store.users)
  const [lastInputOutput, setLastInputOutput] = useState<ILastInputOutput>({
    input: {
      user: '',
      value: 0,
      release_date: new Date()
    },
    output: {
      user: '',
      value: 0,
      release_date: new Date()
    }
  })

  const totalValue = () => {
    return String(currencyjs(users.map(user => user.total_money).reduce((prev, curr) => prev + curr, 0)))
  }

  useEffect(() => {
    const initial = async() => {
      const reqLastInputOutput = await new TransactionService(admin.token).lastInputOutput()
      reqLastInputOutput == null
      ? null
      : setLastInputOutput(reqLastInputOutput)

    }
    initial()
    setPositionSelected("125px")
  }, [])


  return (
    <Background>
      <Main>
        <Content>
          <HeaderBg>
            <div>
              <h2>Bem-vindo</h2>
              <h1>Painel de controle</h1>
            </div>
          </HeaderBg>

          <InventoryBg>
            <InventoryContent>
              <CardTitle>Orçamento</CardTitle>
              <CardDiv backgroundColor='#f5f5f5'>
                <CardTexts>
                  <CardText>Valor atual</CardText>
                  <CardValue>{totalValue()}</CardValue>
                </CardTexts>

                <Fab style={{flexShrink: 0}} color="secondary" size='medium' aria-label="add">
                  <AddIcon color='primary' />
                </Fab>
              </CardDiv>

              <InOutValue>
                <CardDiv backgroundColor='#f8b6b6'>
                  <CardTexts>
                    <CardText>Ultima saída</CardText>
                    <CardValue>{currencyjs(lastInputOutput.output['value'])}</CardValue>
                    <CardInfo>Usuario: {lastInputOutput.output['user']}</CardInfo>
                    <CardInfo>Data: {formatDate(lastInputOutput.output['release_date'])}</CardInfo>
                  </CardTexts>

                  <TrendingDownIcon />
                </CardDiv>

                <CardDiv backgroundColor='#b6f8c4'>
                  <CardTexts>
                    <CardText>Ultima entrada</CardText>
                    <CardValue>{currencyjs(lastInputOutput.input['value'])}</CardValue>
                    <CardInfo>Usuario: {lastInputOutput.output['user']}</CardInfo>
                    <CardInfo>Data: {formatDate(lastInputOutput.output['release_date'])}</CardInfo>
                  </CardTexts>

                  <TrendingUpIcon />
                </CardDiv>
              </InOutValue>
            </InventoryContent>
          </InventoryBg>
        </Content>

        <RightBar/>
      </Main >
    </Background>
  )
}

export default Dashboard;