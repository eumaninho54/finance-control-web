import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Main, BackgroundNav, ContentNav, Nav, SelectedTab, SectionNav } from './styles';
import { RiHome5Line } from 'react-icons/Ri';
import { AiOutlineMenu } from 'react-icons/Ai';

import { MdOutlineAppRegistration, MdOutlineQueryStats } from 'react-icons/Md'
import { Drawer } from '@mui/material';
import RightBar from '../rightBar';


interface NavBarProps {
  children: React.ReactNode
  positionSelected: string
}

const NavBar: React.FC<NavBarProps> = ({ children, positionSelected }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  return (
    <Main>
      <BackgroundNav>
        <SelectedTab positionSelected={positionSelected} />

        <Nav>
          <SectionNav 
            isMenuMobile={true}
            onClick={() => setIsDrawerOpen(true)}>
            <AiOutlineMenu size={35} />
          </SectionNav>

          <SectionNav onClick={() => navigate("/")}><RiHome5Line size={35} /></SectionNav>
          <SectionNav onClick={() => navigate("/registration")}><MdOutlineAppRegistration size={35} /></SectionNav>
          <SectionNav onClick={() => navigate("/stats")}><MdOutlineQueryStats size={35} /></SectionNav>
        </Nav>
      </BackgroundNav>

      <Drawer
        anchor={'left'}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <RightBar/>
      </Drawer>

      <ContentNav>
        {children}
      </ContentNav>
    </Main>
  )
}

export default NavBar;