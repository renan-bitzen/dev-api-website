import styled from 'styled-components'
import { theme } from './theme'
export const Container = styled.div``
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10vh 0 20vh 0;
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 90%;

  padding: 25px;

  text-align: center;

  background-image: url('/masks/lines.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  h1 {
    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 400;
    }
  }

  p {
    max-width: 65ch;

    margin-bottom: 15px;

    overflow: hidden;
    font-size: 1.7vh;

    line-height: 1.7;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
    padding: 25px;
    text-align: left;
    background-size: 100%;
  }
`
export const PipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Pipe = styled.div`
  width: 10vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
export const ContainerItegration = styled.div`
  margin: 10vw 0 8vw 0;
`
export const CarrouselTitle = styled.h2`
  font-size: 2.3rem;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    margin-top: 10px;
    font-size: 1.375rem;
  }

  span {
    font-weight: 700;
  }
`
export const CostumersCarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw;
  background-size: 76%;
`

export const QuoteContainer = styled.div`
  padding: 20px 0;
`

export const FreeTestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8vh 0 8vh 0;
`
export const FreeTestRows = styled.div`
  display: flex;
  flex-direction: column;

  width: 40vw;
`
export const FreeTest = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 2.3rem;
    color: ${theme.colors.primary};

    @media (max-width: 996px) {
      margin-top: 10px;
      font-size: 1.375rem;
    }

    span {
      font-weight: 700;
    }
  }
`
export const ListIntegrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ListIntegrationTitle = styled.h2`
  font-size: 3.2rem;
  color: ${theme.colors.primary};

  @media (max-width: 996px) {
    font-size: 1.375rem;
  }

  span {
    font-weight: 700;
  }
`
