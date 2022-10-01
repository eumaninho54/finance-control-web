import React from 'react';
import { HeaderDashboard, TitleHeaderDashboard, WelcomeHeaderDashboard } from './styles';


const Dashboard: React.FC = () => {
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