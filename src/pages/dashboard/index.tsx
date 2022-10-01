import React, { useEffect } from 'react';
import { HeaderDashboard, TitleHeaderDashboard, WelcomeHeaderDashboard } from './styles';


interface DashboardProps {
  setPositionSelected: React.Dispatch<React.SetStateAction<string>>
}

const Dashboard: React.FC<DashboardProps> = ({ setPositionSelected }) => {
  useEffect(() => {
    setPositionSelected("125px")
  }, [])

  return (
    <>
      <HeaderDashboard>
        <WelcomeHeaderDashboard>Bem-vindo</WelcomeHeaderDashboard>
        <TitleHeaderDashboard>Painel de controle</TitleHeaderDashboard>
      </HeaderDashboard>


      
    </>
  )
}

export default Dashboard;