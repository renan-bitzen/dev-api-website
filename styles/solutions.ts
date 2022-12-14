import styled from 'styled-components'

import { theme } from './theme'

interface ITitleProps {
  width?: string
}

export const Container = styled.div`
  z-index: 1;
  width: 100%;
`

export const HeroContent = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 8vw 0 8vw;
  text-align: left;

  > h2 {
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 800;
    color: ${theme.colors.secondary};
    margin: 2vh 0;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
    text-align: left;
    background-size: 100%;
  }
`
export const PipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`
export const Pipe = styled.div`
  width: 15vh;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const Title = styled.h1<ITitleProps>`
  z-index: 4;
  width: ${props => (props.width ? props.width : '62%')};
  text-align: center;
  font-size: 2.5rem;

  @media (max-width: 996px) {
    width: 100%;
    font-size: 2rem;
  }

  @media (min-width: 1600px) {
    width: ${props => (props.width ? props.width : '62%')};
    font-size: 3.75rem;
    line-height: 7vh;
  }

  > b {
    font-weight: 700;
  }
`

export const Subtitle = styled.p`
  z-index: 4;
  width: 60%;
  margin: 3vh 0 4vh 0;
  font-size: 1.375rem;
  line-height: 3vh;
  text-align: center;

  @media (max-width: 996px) {
    width: 100%;
    font-size: 1.25rem;
  }

  @media (min-width: 1600px) {
    max-width: 43%;
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
  margin-top: 30px;
  background-color: white;
`

export const QuoteContainer = styled.div`
  padding: 8vh 3vw 12vh 6vw;
`

export const ProfessionalServiceContainer = styled.div``

export const SolutionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 996px) {
    padding-bottom: 10vh;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10vh 8vw 0 8vw;

  @media (max-width: 996px) {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h2 {
    width: 61%;
    margin-bottom: 15px;
    font-size: 2rem;
    line-height: 1.2;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.375rem;
      line-height: 1;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }
`

export const ParagraphContainer = styled.div`
  width: 100%;
  margin-bottom: 5vh;

  > p {
    max-width: 100vw;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;
  }

  b {
    font-weight: 700;
  }

  @media (max-width: 996px) {
    width: 100%;

    > p {
      font-size: 1.1rem;
      line-height: 1;
    }
  }
`

export const CarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw 10vh 8vw;
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

export const IntegrationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;

  @media (max-width: 996px) {
    flex-direction: column;
    padding: 0 8vw 0 8vw;
  }
`

export const ImageContainer = styled.div`
  > img {
    width: 32vw;

    @media (max-width: 996px) {
      width: 100%;
    }
  }
`
export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const JoinNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    max-width: 38ch;
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 996px) {
      width: 85%;
      font-size: 1.375rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }
`
export const PipeJoinNow = styled.div`
  width: 15vh;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
export const ListIconContainer = styled.div`
  width: 100vw;
  padding: 5vh 0 5vh 0;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 5vh 8vw 5vh 8vw;
    margin: 3vh 0;
  }
`

export const ListIconlTitle = styled.h2`
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

export const AdvantagesContainer = styled.div`
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: 4vh 4vw;
  columns: 2;
  text-align: left;
  font-size: 1.125rem;
  line-height: 28px;

  > ul {
    > li {
      margin-bottom: 2vh;
      @media (max-width: 996px) {
        height: 15vh;
      }

      > img {
        vertical-align: middle;
        margin: 0 0.5vw 0 0;
        max-width: 35px;
      }
    }
  }

  @media (min-width: 1300px) {
    display: inline-block;
    box-shadow: 0px 0px 30px #5f47ff26;
    margin: 0 15vh 20vh 15vh;
  }
`
