import styled from 'styled-components'
import { theme } from './theme'

export const Hero = styled.section`
  display: flex;
  align-items: center;

  height: 100vh;

  padding: 0 8vw 0 8vw;

  background-color: ${theme.colors.gray[100]};

  background-image: url('/masks/lines.svg');
  background-repeat: no-repeat;
  background-position-y: 127%;
  background-size: 100%;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 45%;
  height: 100%;

  h1 {
    max-width: 20ch;

    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 400;
    }
  }

  p {
    max-width: 50ch;

    margin-bottom: 15px;

    overflow: hidden;
    font-size: 2vh;

    line-height: 1.7;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
    padding: 25px;
    text-align: left;
    background-size: 100%;
  }
`

export const GifContainer = styled.div`
  width: 54%;

  img {
    width: 100%;
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

export const Content = styled.section`
  width: 100%;
`

export const Carrousel = styled.section`
  width: 100%;
  padding: 10vh 8vh 0 8vw;
  background-size: 76%;
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

export const Quote = styled.div`
  padding: 10vh 3vw 0 5vw;
`

export const PlatformContainer = styled.div`
  display: flex;
  padding: 10vh 8vw;
`

export const Platform = styled.div`
  width: 50%;

  h2 {
    max-width: 20ch;

    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 700;
    }
  }

  p {
    max-width: 50ch;

    margin-bottom: 15px;

    overflow: hidden;
    font-size: 2vh;

    line-height: 1.3;
  }
`

export const PlatformDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50%;
  height: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vh;
`

export const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12vh;
  height: 12vh;

  padding: 1vw;

  background: transparent linear-gradient(225deg, #5f47ff -80%, #ffffff 60%) 0%
    0% no-repeat padding-box;
  border-radius: 5px;

  img {
    width: 100%;
    border-radius: 5px;
  }
`

export const DetailsText = styled.div`
  margin-left: 20px;

  p {
    margin-bottom: 1vh;

    font-size: 3vh;
  }

  span {
    font-size: 4vh;
    font-weight: 700;

    color: ${theme.colors.green[100]};
  }
`

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10vh 8vw;

  text-align: center;

  background-color: ${theme.colors.gray[100]};
  background-image: url('/masks/devapi.svg');
  background-size: cover;

  h2 {
    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 700;
    }
  }

  p {
    max-width: 120ch;

    margin-bottom: 15px;

    overflow: hidden;
    font-size: 2vh;

    line-height: 1.3;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 25vw;
  height: 20vw;

  padding: 2vw;
  margin: 1vw;

  text-align: left;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 25px #5f47ff29;
`

export const CardTitle = styled.div`
  font-size: 2.5vh;
  font-weight: 700;
`

export const ConnectorsContainer = styled.div`
  img {
    width: 4vw;
    margin-right: 10px;
    box-shadow: 0px 10px 25px #5f47ff29;
  }
`

export const Invisible = styled.div`
  width: 4vw;
  height: 4vw;
`
