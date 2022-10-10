import styled from "styled-components";

interface TabsProps {
  tabSelected: number
  index: number
}


export const MainRegistration = styled.div`
  width: 100%; 
  height: 100%; 
  background-color: #e7e4e4; 
  border-top-left-radius: 30px; 
  border-bottom-left-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchBox = styled.section`
  max-width: 1400px;
  width: 90%;
`

export const TabUser = styled.section`
  display: ${({tabSelected, index}: TabsProps) => tabSelected == index ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 80px;
  margin-top: 30px;
`

export const TabMovement = styled.section`
  display: ${({tabSelected, index}: TabsProps) => tabSelected == index ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  height: 300px;
`

export const TableGrid = styled.section`
  width: 90%;
  height: 371px;
  margin-top: 20px;
`

export const ButtonsTable = styled.section`
  width: 90%;
  margin-bottom: 30px;

`