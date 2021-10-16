import styled from 'styled-components'
import { theme } from './theme'
export const Container = styled.div``
export const CardContainer = styled.div`
  width: 100%;
  padding: 10vh 8vw 0 8vw;
`
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8vh 8vw 8vh 8vw;
  text-align: center;
  background-image: url('/masks/lines.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
    background-size: 100%;
  }

  > h1 {
    font-size: 2.625rem;

    @media (max-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.75rem;
    }

    > b {
      font-weight: 700;
    }
  }

  > p {
    width: 70%;
    margin: 3vh 0;
    margin-bottom: 30px;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
      line-height: 1.2;
    }

    @media (min-width: 1600px) {
      width: 55%;
    }
  }
`

export const PipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    align-items: flex-start;

    text-align: left;
  }
`
export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    @media (max-width: 576px) {
      margin-top: 10px;
    }

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    > b {
      font-weight: 700;
    }
  }
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
  @media (max-width: 900px) {
    align-items: flex-start;
    padding-left: 0;
    text-align: left;
  }
`
export const ContainerCallToAction = styled.div`
  padding: 3vh 8vw 3vh 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;

    text-align: left;
  }
`
export const CarrouselTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;

  > h2 {
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    @media (max-width: 576px) {
      margin-top: 10px;
    }

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    > b {
      font-weight: 700;
    }
  }
`

export const CostumersCarrouselContainer = styled.div`
  width: 100%;
  padding: 10vh 8vh 0;
  background-size: 76%;
`

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10vh 3vw 3vh 6vw;
`

export const AcordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10vh 8vw 10vh 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;
  }
`

export const ListIntegrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 10vh 8vw 0 8vw;
  @media (max-width: 900px) {
    align-items: flex-start;
  }
`
export const ListColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`
export const ListIntegrationTitle = styled.h2`
  font-size: 3.2rem;
  color: ${theme.colors.primary};
  text-align: center;

  @media (max-width: 900px) {
    font-size: 2rem !important;
    text-align: left;
  }

  > b {
    font-weight: 700;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0 0 0;

  @media (max-width: 900) {
    align-items: flex-start;
  }
`
