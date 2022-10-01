import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Main, BackgroundNav, ContentNav } from './styles';

// import { Container } from './styles';

interface NavBarProps {
  children: React.ReactNode
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <Main>
      <BackgroundNav>
        <button onClick={() => navigate("/login")}>LOGIN</button>
        <button onClick={() => navigate("/")}>HOME</button>
      </BackgroundNav>

      <ContentNav>
        {children}
      </ContentNav>
      
    </Main>
  )
}

export default NavBar;