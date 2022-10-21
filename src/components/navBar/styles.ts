import styled from "styled-components";
import { theme } from "../../theme";

interface SelectedTabProps {
  positionSelected: string
}

interface SectionNavProps {
  isMenuMobile?: boolean
}


export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const BackgroundNav = styled.section`
  height: 100vh;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: ${() => theme.primaryColor};
`

export const SelectedTab = styled.div`
  background-color: #F5F9F6;
  width: 5px;
  height: 40px;
  margin-top: ${({positionSelected}: SelectedTabProps) => positionSelected };
  transition: 0.4s;
  margin-right: 10px;
`

export const Nav = styled.nav`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`

export const SectionNav = styled.a`
  text-decoration: none;
  color: ${theme.secundaryColor};
  width: 50px;
  height: 50px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: ${({isMenuMobile}: SectionNavProps) => isMenuMobile ? '20px' : '0px' };
  visibility: ${({isMenuMobile}: SectionNavProps) => isMenuMobile ? 'hidden' : 'visible' };

  @media (max-width: 785px) {
    visibility: ${({isMenuMobile}: SectionNavProps) => isMenuMobile ? 'visible' : 'visible' };
  }
`

export const ContentNav = styled.section`
  width: 100%;
`


/* @media (max-width: 785px) {
    display: none;
  }*/