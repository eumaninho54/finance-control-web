import React, { useEffect } from 'react';
import { Background, Main, HeaderBg, InventoryBg, InventoryContent, CardDiv, InOutValue, CardTitle, CardValue, CardInfo, CardTexts, CardText, Content, ContainerFixedRight } from './styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { currencyjs } from '../../utils/currencyjs';
import RightBar from '../../components/rightBar';
import { formatDate } from '../../utils/formatDate';

interface DashboardProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Dashboard: React.FC<DashboardProps> = ({ setPositionSelected }) => {
  const transactions = useAppSelector((store) => store.transactions)
  const users = useAppSelector((store) => store.users)

  const totalValue = () => {
    return String(currencyjs(users.map(user => user.total_money).reduce((prev, curr) => prev + curr, 0)))
  }

  useEffect(() => {
    setPositionSelected("185px")
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

                <Fab style={{ flexShrink: 0, zIndex: 1 }} color="secondary" size='medium' aria-label="add">
                  <AddIcon color='primary' />
                </Fab>
              </CardDiv>

              <InOutValue>
                <CardDiv backgroundColor='#f8b6b6'>
                  <CardTexts>
                    <CardText>Ultima saída</CardText>
                    <CardValue>{currencyjs(transactions.output['value'])}</CardValue>
                    <CardInfo>Usuario: {transactions.output['user']}</CardInfo>
                    <CardInfo>Data: {formatDate(transactions.output['release_date'])}</CardInfo>
                  </CardTexts>

                  <TrendingDownIcon />
                </CardDiv>

                <CardDiv backgroundColor='#b6f8c4'>
                  <CardTexts>
                    <CardText>Ultima entrada</CardText>
                    <CardValue>{currencyjs(transactions.input['value'])}</CardValue>
                    <CardInfo>Usuario: {transactions.input['user']}</CardInfo>
                    <CardInfo>Data: {formatDate(transactions.input['release_date'])}</CardInfo>
                  </CardTexts>

                  <TrendingUpIcon />
                </CardDiv>
              </InOutValue>
            </InventoryContent>
          </InventoryBg>
        </Content>

        <ContainerFixedRight>
          <RightBar />
        </ContainerFixedRight>
      </Main >
    </Background>
  )
}

export default Dashboard;