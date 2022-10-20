import styled from "styled-components";
import { theme } from "../../theme";

interface CardValueProps {
  backgroundColor: string;
}


export const Background = styled.main`
  width: 100%; 
  height: 100%; 
  background-color: #e7e4e4; 
  border-top-left-radius: 30px; 
  border-bottom-left-radius: 30px;
` 

export const Main = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 320px;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin: 0px 35px;
`;

export const HeaderBg = styled.header`
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
export const InventoryBg = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;
`;

export const InventoryContent = styled.div`
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
