import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.div``
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  text-align: center;
  background-image: url('/masks/lines.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: 576px) {
    align-items: flex-start;
    padding: 25px;
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
    margin-bottom: 15px;
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

export const Pipe = styled.div`
  width: 12vh;
  height: 3px;
  margin-bottom: 10px;

  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`
export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10vh 8vw 0 8vw;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 25vw;
  /* height: 29vh; */

  padding: 2vw 2vw 0 2vw;
  margin: 1vw;

  text-align: center;
  background-color: ${theme.colors.gray[100]};
  border-radius: 10px;
  box-shadow: 0px 10px 25px #5f47ff29;

  h2 {
    font-size: 2vw;
    font-weight: 700;

    @media (max-width: 900px) {
      font-size: 3.5vh;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 30vh;
    padding: 3vh 3vh 0 3vh;

    margin-bottom: 2.5vh;
    box-shadow: 0px 10px 20px #5f47ff29;
  }
`
export const ImageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-top: 2vh;
  img {
    width: 25vw;
    height: 25vh;

    @media (max-width: 1024px) {
      width: 51vw;
      height: 17vh;
    }
  }
`
export const KnowPatnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10vh 8vw 0 8vw;

  text-align: center;

  h2 {
    margin-bottom: 15px;
    font-size: 6vh;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`
export const CardPatnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  padding: 10vh 8vw 0 8vw;
  @media (max-width: 900px) {
    justify-content: center;
  }
`
export const CardPatner = styled.div`
  display: flex;

  flex: 0 0 49%;
  flex-direction: column;
  padding: 3vh 1.5vw 5vh 1.5vw;
  margin-top: 2vh;

  border-radius: 10px;
  box-shadow: 0px 10px 25px #5f47ff29;
  img {
    width: 12vw;
    padding-bottom: 5vh;
    @media (max-width: 900px) {
      width: 25vw;
    }
  }
  p {
    font-size: 2.2vh;
    line-height: 1.4;
  }
  @media (max-width: 900px) {
    flex: 0 0 100%;
    padding: 3vh 1.7vw 5vh 4vw;
    font-size: 1.7vh;
    box-shadow: 0px 10px 10px #5f47ff29;
  }
`
export const SubtextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
`
export const BulletImage = styled.img`
  src: url('/icons/circle-check.svg');
`
export const SubText = styled.li`
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
  padding-left: 2vh;

  p {
    line-height: 2;
    @media (max-width: 1024px) {
      padding: 2vh;
      line-height: 1;
    }
  }

  :before {
    display: flex;

    align-self: center;
    justify-self: center;
    width: 2vw;
    height: 3vh;

    margin-right: 1vh;

    content: '';

    background-image: url('/icons/circle-check.svg');
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: 1024px) {
      width: 10vw;
      margin-right: 0.1vw;
      background-position: center;
    }
  }
`

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10vh 8vw 0 8vw;

  text-align: center;

  h2 {
    margin-bottom: 15px;
    font-size: 5vh;

    span {
      font-weight: 700;
    }
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`
export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 51vw;

  @media (max-width: 900px) {
    width: 100%;
  }
`
export const FeatureCard = styled.div`
  display: flex;
  align-items: center;

  margin: 2vh;

  text-align: left;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 8vh;
  height: 8vh;

  background-color: ${theme.colors.gray[100]};
  border-radius: 5px;

  img {
    width: 60%;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  margin-left: 15px;

  p {
    max-width: 28ch;
    margin: 0;
    line-height: 1;
  }
`

export const Title = styled.p`
  font-weight: 700;
`

export const CallToActionContainer = styled.div`
  padding: 0 8vw 10vh 8vw;
`
