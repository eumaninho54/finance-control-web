import React, { useEffect } from 'react';
import { BackgroundDashboard, MainDashboard, HeaderBgDashboard, InventoryBgDashboard, InventoryContentDashboard, CardDiv, InOutValue, CardTitle, CardValue, CardInfo, CardTexts, CardText, ContentDashboard, RightBarBgDashboard, RightBarContentDashboard, ContentTransaction, LetterTransaction, BoxValueTransaction } from './styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { getUsers } from '../../store/users/thunks/getUsers';
import currency from 'currency.js';

interface DashboardProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Dashboard: React.FC<DashboardProps> = ({ setPositionSelected }) => {
  const useDispatch = useAppDispatch()
  const users = useAppSelector((store) => store.users)


 

  const totalValue = () => {
    return String(currency(users.map(user => user.total_money).reduce((prev, curr) => prev + curr, 0), {decimal: ',', separator: ".", symbol: "R$" }).format())
  }

  const lastOutput = () => {
    return String(currency(users.map(user => user.output_value).reduce((prev, curr) => prev + curr, 0), {decimal: ',', separator: ".", symbol: "R$" }).format())
  }

  const lastInput = () => {
    return String(currency(users.map(user => user.input_value).reduce((prev, curr) => prev + curr, 0), {decimal: ',', separator: ".", symbol: "R$" }).format())
  }

  useEffect(() => {
    setPositionSelected("125px")
  }, [])


  return (
    <BackgroundDashboard>
      <MainDashboard>
        <ContentDashboard>
          <HeaderBgDashboard>
            <div>
              <h2>Bem-vindo</h2>
              <h1>Painel de controle</h1>
            </div>
          </HeaderBgDashboard>

          <InventoryBgDashboard>
            <InventoryContentDashboard>
              <CardTitle>Orçamento</CardTitle>
              <CardDiv backgroundColor='#f5f5f5'>
                <CardTexts>
                  <CardText>Valor atual</CardText>
                  <CardValue>{totalValue()}</CardValue>
                </CardTexts>

                <Fab color="secondary" size='medium' aria-label="add">
                  <AddIcon color='primary' />
                </Fab>
              </CardDiv>

              <InOutValue>
                <CardDiv backgroundColor='#f8b6b6'>
                  <CardTexts>
                    <CardText>Ultima saída</CardText>
                    <CardValue>{lastOutput()}</CardValue>
                    <CardInfo>Usuario: Angelo Menti</CardInfo>
                    <CardInfo>Data: 06/10/2022</CardInfo>
                  </CardTexts>

                  <TrendingDownIcon />
                </CardDiv>

                <CardDiv backgroundColor='#b6f8c4'>
                  <CardTexts>
                    <CardText>Ultima entrada</CardText>
                    <CardValue>+{lastInput()}</CardValue>
                    <CardInfo>Usuario: Angelo Menti</CardInfo>
                    <CardInfo>Data: 06/10/2022</CardInfo>
                  </CardTexts>

                  <TrendingUpIcon />
                </CardDiv>
              </InOutValue>
            </InventoryContentDashboard>
          </InventoryBgDashboard>
        </ContentDashboard>

        <RightBarBgDashboard>
          <RightBarContentDashboard>
            <TextField
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

            <ContentTransaction>
              <LetterTransaction>
                <div>
                  <span>A</span>
                </div>
              </LetterTransaction>

              <h1>Angelo</h1>

              <BoxValueTransaction>
                <span>R$ 233.123.320,00</span>
              </BoxValueTransaction>
            </ContentTransaction>


            <ContentTransaction>
              <LetterTransaction>
                <div>
                  <span>A</span>
                </div>
              </LetterTransaction>

              <h1>Angelo</h1>

              <BoxValueTransaction>
                <span>R$ 1.320,00</span>
              </BoxValueTransaction>
            </ContentTransaction>


            <ContentTransaction>
              <LetterTransaction>
                <div>
                  <span>A</span>
                </div>
              </LetterTransaction>
              <h1>Angelo</h1>

              <BoxValueTransaction>
                <span>R$ 320,00</span>
              </BoxValueTransaction>
            </ContentTransaction>


            <ContentTransaction>
              <LetterTransaction>
                <div>
                  <span>A</span>
                </div>
              </LetterTransaction>
              <h1>Angelo</h1>

              <BoxValueTransaction>
                <span>R$ 320,00</span>
              </BoxValueTransaction>
            </ContentTransaction>


            <ContentTransaction>
              <LetterTransaction>
                <div>
                  <span>A</span>
                </div>
              </LetterTransaction>
              <h1>Angelo</h1>

              <BoxValueTransaction>
                <span>R$ 320,00</span>
              </BoxValueTransaction>
            </ContentTransaction>
          </RightBarContentDashboard>
        </RightBarBgDashboard>
      </MainDashboard >
    </BackgroundDashboard>
  )
}

export default Dashboard;