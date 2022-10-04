import React, { useEffect } from 'react';
import { HeaderBgDashboard, TitleHeaderDashboard, WelcomeHeaderDashboard, InventoryBgDashboard, MainDashboard, HeaderContentDashboard, InventoryContentDashboard, CardDiv, InOutValue, CardTitle, CardValue, CardInfo, CardTexts, CardText, SearchDashboard } from './styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

interface DashboardProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Dashboard: React.FC<DashboardProps> = ({ setPositionSelected }) => {
  useEffect(() => {
    setPositionSelected("125px")
  }, [])

  return (
    <>
      <HeaderBgDashboard>
        <HeaderContentDashboard>
          <WelcomeHeaderDashboard>Bem-vindo</WelcomeHeaderDashboard>
          <TitleHeaderDashboard>Painel de controle</TitleHeaderDashboard>
        </HeaderContentDashboard>
      </HeaderBgDashboard>

      <MainDashboard>
        <InventoryBgDashboard>
          <InventoryContentDashboard>
            <CardTitle>Orçamento</CardTitle>
            <CardDiv backgroundColor='#3a3a3a'>
              <CardTexts>
                <CardText>Valor atual</CardText>
                <CardValue>R$ 1.420,00</CardValue>
              </CardTexts>

              <Fab color="secondary" size='medium' aria-label="add">
                <AddIcon color='primary'/>
              </Fab>
            </CardDiv>

            <InOutValue>
              <CardDiv backgroundColor='#5f2e2e'>
                <CardTexts>
                  <CardText>Ultima saída</CardText>
                  <CardValue>R$ -249,11</CardValue>
                  <CardInfo>Usuario: Angelo Menti</CardInfo>
                  <CardInfo>Data: 06/10/2022</CardInfo>
                </CardTexts>

                <TrendingDownIcon/>
              </CardDiv>

              <CardDiv backgroundColor='#2e5f3a'>
                <CardTexts>
                  <CardText>Ultima entrada</CardText>
                  <CardValue>R$ +611,00</CardValue>
                  <CardInfo>Usuario: Angelo Menti</CardInfo>
                  <CardInfo>Data: 06/10/2022</CardInfo>
                </CardTexts>

                <TrendingUpIcon/>
              </CardDiv>
            </InOutValue>
          </InventoryContentDashboard>
        </InventoryBgDashboard>

        
      </MainDashboard>
    </>
  )
}

export default Dashboard;