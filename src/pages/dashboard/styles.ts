import styled from "styled-components";
import { theme } from "../../theme";

interface CardValueProps {
  backgroundColor: string;
}


export const BackgroundDashboard = styled.main`
  width: 100%; 
  height: 100%; 
  background-color: #e7e4e4; 
  border-top-left-radius: 30px; 
  border-bottom-left-radius: 30px;
` 

export const ContentDashboard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin: 0px 35px;
`;

export const MainDashboard = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 320px;
`;

export const HeaderBgDashboard = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;

  div {
    margin-left: 20px;
    margin-top: 20px;
    height: 120px;
    width: 100%;
    max-width: 700px;
  }

  h1{
    margin-top: 10px;
    font-size: 28px;
    color: ${() => theme.fontColor};
  }

  h2{
    color: ${() => theme.lightFontColor};
    margin-bottom: 10px;
  }

  @media (max-width: 840px) {
    align-items: flex-start;

    div{
      width: auto;
    }
  }
`;

//Inventory Section
export const InventoryBgDashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
`;

export const InventoryContentDashboard = styled.div`
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`;

export const InOutValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

export const CardTitle = styled.h1`
  font-size: 24px;
  margin: 5px 0px 0px;
`;

export const CardDiv = styled.section`
  min-width: 270px;
  height: 150px;
  background-color: ${(props: CardValueProps) => props.backgroundColor};
  margin: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CardTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.h1`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  margin-bottom: 5px;
`;

export const CardValue = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin: 0;
  margin-bottom: 20px;
`;

export const CardInfo = styled.span`
  margin-top: 6px;
`;

//RightBar Section
export const RightBarBgDashboard = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  right: 0;
  top: 0;
  width: 320px;
  height: 100vh;
`;

export const RightBarContentDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 50px 0px;
`

export const ContentTransaction = styled.section`
  width: 270px;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;

  h1{
    width: 40%;
    font-size: 20px;
    margin: 0;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`

export const BoxValueTransaction = styled.div`
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
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

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

