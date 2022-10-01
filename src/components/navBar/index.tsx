import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Main, BackgroundNav, ContentNav, Nav, SelectedTab, SectionNav } from './styles';
import { RiHome5Line } from 'react-icons/Ri';
import { MdOutlineAppRegistration, MdOutlineQueryStats } from 'react-icons/Md'


interface NavBarProps {
  children: React.ReactNode
  positionSelected: string
}

const NavBar: React.FC<NavBarProps> = ({ children,  positionSelected}) => {
  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  useEffect(() => {
    console.log("a")
  })

  return (
    <Main>
      <BackgroundNav>
        <SelectedTab positionSelected={positionSelected} />
        <Nav>
          <SectionNav onClick={() => navigate("/")}><RiHome5Line size={35} /></SectionNav>
          <SectionNav onClick={() => navigate("/registration")}><MdOutlineAppRegistration size={35} /></SectionNav>
          <SectionNav onClick={() => navigate("/stats")}><MdOutlineQueryStats size={35} /></SectionNav>
        </Nav>
      </BackgroundNav>

      <ContentNav>
        {children}
      </ContentNav>
    </Main>
  )
}

export default NavBar;