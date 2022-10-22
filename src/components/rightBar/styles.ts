import styled from "styled-components";
import { theme } from "../../../theme";



export const RightBarBg = styled.section`
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 320px;
  height: 100vh;
`;

export const RightBarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 50px 0px;
`

export const CardTitle = styled.h1`
  font-size: 24px;
  margin: 5px 0px 0px;
`;

export const ContentTransaction = styled.section`
  width: 270px;
  height: 70px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
`

export const BoxText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  h1{
    width: 95%;
    font-size: 20px;
    margin: 0;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-weight: bold;
  }

  span {
    width: 95%;
    font-size: 16px;
    margin: 0;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-weight: 500;
  }
`

export const BoxValueTransaction = styled.section`
  width: 35%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  span {
    font-weight: bold;
  }
`

export const LetterTransaction = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;

  div {
    background-color: ${() => theme.primaryColor};
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  span{
    font-size: 25px;
    margin: 0;
    color: white;
  }
`

