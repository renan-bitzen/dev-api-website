import styled from 'styled-components'

import { theme } from './theme'

export const Hero = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 8vw 0 8vw;
  background-color: ${theme.colors.gray[100]};
  background-image: url('/backgrounds/Apresentação-DevApi.png');
  background-repeat: no-repeat;
  background-position-y: 140%;
  background-size: 100%;

  @media (max-width: 996px) {
    flex-direction: column;
    padding: 15vh 8vw 0 8vw;
  }
`

export const HeroContent = styled.div`
  z-index: 24;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  @media (max-width: 576px) {
    text-align: left;
    background-size: 100%;
  }

  @media (max-width: 996px) {
    align-items: center;
    z-index: 20;
    width: 100%;
  }

  > h1 {
    max-width: 19ch;
    margin-bottom: 15px;
    font-size: 2.625rem;

    @media (max-width: 576px) {
      max-width: 15ch;
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
    width: 90%;
    margin-bottom: 30px;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.5;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 90%;
    }
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
  width: 7vw;
  height: 3px;
  margin-bottom: 10px;
  background-color: ${theme.colors.secondary};

  @media (max-width: 576px) {
    width: 8vh;
  }
`

export const GifContainer = styled.div`
  width: 54%;

  @media (max-width: 900px) {
    width: 100%;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`

export const Content = styled.section`
  width: 100%;
`

export const CarrouselImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8vw;
  margin-bottom: 10vh;

  img {
    width: 100%;
  }
`

export const Carrousel = styled.section`
  width: 100%;
  padding: 7vh 8vw 7vh;
  background-size: 100%;

  @media (max-width: 900px) {
    padding: 0 5.5vw 6vh;
  }
`

export const CarrouselTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2vh;

  > h2 {
    font-size: 2.6rem;
    color: ${theme.colors.primary};

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    @media (max-width: 900px) {
      text-align: left;
    }

    @media (max-width: 576px) {
      margin-top: 10px;
    }

    > b {
      font-weight: 700;
    }
  }

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`

export const PlatformContainer = styled.div`
  display: flex;
  padding: 10vh 8vw;

  @media (max-width: 996px) {
    flex-direction: column;
  }
`

export const Platform = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;

  @media (max-width: 996px) {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }

  > h2 {
    max-width: 20ch;
    margin-bottom: 15px;
    font-size: 2.25rem;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    span {
      font-weight: 700;
    }
  }

  > p {
    max-width: 50ch;
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (max-width: 996px) {
      text-align: center;
      width: 100%;
      font-size: 1.25rem;
    }

    @media (min-width: 1600px) {
      width: 90%;
      font-size: 1.375rem;
    }
  }
`

export const PlatformDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
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
  background-color: ${theme.colors.gray[100]};
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    padding: 3vw;
  }
`

export const DetailsText = styled.div`
  margin-left: 20px;

  > p {
    font-weight: 800;
    margin-bottom: 1vh;
    font-size: 3vh;
  }

  > span {
    font-size: 4vh;
    font-weight: 700;
    color: ${theme.colors.green[100]};
  }

  @media (max-width: 900px) {
    max-width: 20ch;
  }
`

export const BusinessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh 8vw;
  margin: 10vh 0 0 0;
  text-align: center;
  background-color: ${theme.colors.gray[100]};
  background-image: url('/masks/devapi.svg');
  background-position-y: top;
  background-size: auto;

  > h2 {
    margin-bottom: 15px;
    font-size: 2.25rem;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }

    b {
      font-weight: 700;
    }
  }

  > p {
    max-width: 120ch;
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
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
  box-shadow: 0 10px 25px #5f47ff29;

  @media (max-width: 900px) {
    width: 100%;
    height: 40vh;
    padding: 3vh;
    margin: 0;
    margin-bottom: 2vh;
  }

  > h3 {
    font-size: 1.125rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }

  > p {
    font-size: 0.875rem;
    line-height: 1.2;

    @media (max-width: 996px) {
      font-size: 2.5vh;
    }

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }
`

export const ConnectorsContainer = styled.div`
  img {
    width: 3.5vw;
    height: 100%;
    margin-right: 10px;
    box-shadow: 0 10px 25px #5f47ff29;

    @media (max-width: 900px) {
      width: 6vh;
    }
  }
`

export const Invisible = styled.div`
  width: 2px;
  height: 4vw;

  @media (max-width: 900px) {
    height: 6vh;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 8vw 0 8vw;
`

export const Spacing = styled.div`
  margin: 20vh 0 0 0;
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 8vw 8vh 8vw;
  text-align: center;
  background: transparent url('/backgrounds/Apresentação-DevApi.png') 0% 0%
    round padding-box;

  > h2 {
    font-size: 2.25rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }
  }

  > p {
    max-width: 120ch;
    margin-top: 2vh;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const TransformContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 8vh 4vw 8vh 4vw;
  text-align: center;
  background: ${theme.colors.white};

  > h2 {
    font-size: 2.25rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }
  }

  > p {
    max-width: 120ch;
    margin-top: 2vh;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const Features = styled.div`
  columns: 3;
  justify-content: space-between;
  margin-top: 7vh;

  @media (max-width: 996px) {
    width: 100%;
  }

  @media (max-width: 1300px) {
    justify-content: center;
  }
`

export const FeatureCard = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 1vw 0 1vw 1vw;
  text-align: left;
  border: 1px solid ${theme.colors.gray[100]};
  border-radius: 15px;
  margin: 0.5vw;

  @media (max-width: 996px) {
    align-items: flex-start;
    margin: 0 0 7vh;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vh;
  height: 8vh;
  background-color: ${theme.colors.gray[100]};
  border-radius: 5px;

  @media (max-width: 996px) {
    width: 13vh;
    height: 10vh;
  }

  img {
    width: 60%;
    height: 100%;
    padding: 2px;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 15px;

  > p {
    max-width: 28ch;
    margin: 0;
    line-height: 1.2;
    font-size: 1rem;
  }

  > b {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 1.125rem;
  }
`

export const CallToActionContainer = styled.div`
  padding: 0 8vw 10vh 8vw;
`

export const ListIconContainer = styled.div`
  width: 100vw;
  padding: 8vh 0 0 0;

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

export const JoinNowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  text-align: center;

  > h2 {
    max-width: 30ch;
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1.2;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 2rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    > b {
      font-weight: 700;
    }
  }

  p {
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.5rem;
    line-height: 1.3;
  }

  @media (max-width: 996px) {
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`

export const SystemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  text-align: center;

  b {
    font-weight: 700;
    color: ${theme.colors.secondary};
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const SystemImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45vh;

  @media (max-width: 900px) {
    height: 45vh;
  }
`

export const SystemImage = styled.img`
  object-fit: cover;
  width: 100%;

  @media (max-width: 900px) {
    object-fit: cover;
    width: 100%;
  }
`

export const ApiManagerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;

  > p {
    max-width: 56ch;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    width: 100%;
    text-align: left;
  }
`

export const CardSystemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 30px #5f47ff26;
  border-radius: 15px;
  opacity: 1;
  padding: 50px 30px 30px 30px;

  > p {
    max-width: 50ch;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  b {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }

  @media (max-width: 996px) {
    width: 100%;
  }
`

export const SecurityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`

export const SecurityTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  b {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  > h2 {
    max-width: 35ch;
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 996px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    @media only screen and (max-width: 1023px) {
      text-align: left;
    }
  }

  p {
    max-width: 90ch;
    margin-bottom: 15px;
    overflow: hidden;
    font-size: 1.525rem;
    line-height: 1.3;
    text-align: center;

    @media (max-width: 996px) {
      width: 100%;
      font-size: 1.125rem;
      text-align: left;
    }
  }

  @media only screen and (max-width: 1023px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 8vw 0 8vw;
  }
`

export const SecurityContentContainer = styled.div`
  h2 {
    margin-bottom: 1vh;
  }

  b {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  p {
    overflow: hidden;
    font-size: 1.125rem;
    line-height: 1.3;

    @media (min-width: 1600px) {
      font-size: 1.375rem;
    }
  }
`

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8vw 10vh 19.5vw;

  @media (max-width: 996px) {
    align-items: center;
    padding: 0 8vw 0 8vw;
    margin-bottom: 20px;
    text-align: center;
  }
`

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 12.5vh 0 5vh 0;

  b {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  > h2 {
    max-width: 35ch;
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1.2;
    text-align: left;

    @media (max-width: 996px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    @media only screen and (max-width: 1023px) {
      text-align: left;
    }
  }

  @media (max-width: 996px) {
    width: 100%;
  }
`

export const UnlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8vh 8vw 8vh 8vw;

  @media (max-width: 996px) {
    align-items: center;
    padding: 8vh 8vw 8vh 8vw;
    margin-bottom: 20px;
    text-align: center;
  }
`

export const UnlockTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  b {
    font-weight: 700;
    color: ${theme.colors.primary};
  }

  > h2 {
    max-width: 35ch;
    margin-bottom: 15px;
    font-size: 2.625rem;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 996px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1600px) {
      font-size: 3.25rem;
    }

    @media only screen and (max-width: 1023px) {
      text-align: left;
    }
  }

  @media only screen and (max-width: 1023px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const CasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8vh 4vw 0 8vw;
  text-align: center;
  background: ${theme.colors.white};

  > h2 {
    font-size: 2.25rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }
  }

  > p {
    max-width: 120ch;
    margin-top: 2vh;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const Cases = styled.div`
  > h2 {
    width: 50%;
    > span {
      font-weight: bold;
    }
  }
`

export const QuoteContainer = styled.div`
  display: flex;
  padding: 8vh 8vw 8vh 8vw;
`

export const QuoteStructure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  background: #f6f6ff 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  padding: 5vh 2vw 5vh 2vw;
  margin: 0 2vw 0 0;

  > p {
    max-width: 50ch;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const QuoteAvatar = styled.div`
  display: flex;
  > img {
    max-height: 95px;
  }
`

export const QuoteTitle = styled.div`
  display: block;
  width: 100%;
  > h3 {
    // set block width
    width: max-content;
    font-weight: bold;
  }

  > img {
    align-self: flex-start;
    max-width: 26px;
  }

  > p {
    font-size: 0.9rem;
  }
`

export const QuoteText = styled.div`
  margin-top: 2vh;
  font-size: 0.95rem;
  line-height: 25px;
`

export const Demo = styled.div`
  > h2 {
    width: 50%;
    > span {
      font-weight: bold;
    }
  }
`

export const AdvantagesContainer = styled.div`
  display: flex;
  background: ${theme.colors.white};
  border-radius: 15px;
  padding: 8vh 8vw 8vh 8vw;
  columns: 2;
  text-align: left;
  font-size: 1.125rem;
  align-content: center;
  justify-content: center;

  > ul {
    > li {
      padding: 2vw;

      > img {
        vertical-align: middle;
        margin: 0 0.5vw 0 0;
        max-width: 35px;
      }
    }
  }

  @media (min-width: 1300px) {
    display: inline-block;

    li:nth-child(-n + 5) {
      border-right: 2px solid ${theme.colors.gray[300]};
    }
  }
`

export const DemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 4vw 0 8vw;
  text-align: center;
  background: ${theme.colors.white};

  > h2 {
    font-size: 2.25rem;
    font-weight: 700;

    @media (min-width: 1600px) {
      font-size: 3rem;
    }
  }

  > p {
    max-width: 120ch;
    margin-top: 2vh;
    overflow: hidden;
    font-size: 1.375rem;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    text-align: left;
  }
`
