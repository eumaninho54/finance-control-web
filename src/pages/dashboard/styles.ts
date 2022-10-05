import styled from "styled-components";
import { theme } from "../../theme";

interface CardValueProps {
  backgroundColor: string;
}

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
  margin-right: 270px;
`;

export const HeaderBgDashboard = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  left: 0;

  @media (max-width: 840px) {
    align-items: flex-start;
  }
`;

export const HeaderContentDashboard = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  height: 120px;
  width: 100%;
  max-width: 700px;

  @media (max-width: 840px) {
    width: auto;
  }
`;

export const TitleHeaderDashboard = styled.h1`
  margin-top: 10px;
  font-size: 28px;
`;

export const WelcomeHeaderDashboard = styled.h2`
  color: #cfcfcf;
  margin-bottom: 10px;
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
  border: 2px solid #272727;
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
  margin-top: 5px;
`;

export const CardDiv = styled.section`
  width: 270px;
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
  font-weight: 400;
  margin: 0;
  margin-bottom: 5px;
`;

export const CardValue = styled.span`
  font-weight: bold;
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
  border-left: 3px solid #272727;
  right: 0;
  top: 0;
  width: 250px;
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
  width: 200px;
  height: 60px;
  background-color: red;
  background-color: ${() => theme.primaryColor};
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
 
export const InfosTransaction = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;

`

export const TextsTransaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 20px;
    margin: 0;
  }

  h2{
    font-size: 13px;
    margin: 0;
  }
`

export const LetterTransaction = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    font-size: 25px;
    margin: 0;
    color: ${() => theme.primaryColor};
  }
`

