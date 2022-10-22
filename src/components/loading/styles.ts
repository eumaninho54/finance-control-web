import styled from "styled-components";

interface BackgroundLoadingProps {
  opacity: number
  display: string
  pointerEvents: string
}

export const BackgroundLoading = styled.main`
  display: ${({display}: BackgroundLoadingProps) => display};
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: #262A2B;
  transition: 2.0s;
  opacity: ${({opacity}: BackgroundLoadingProps) => opacity};
  pointer-events: none
`