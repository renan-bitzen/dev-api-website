import {
  FormControl,
  InputGroup,
  Button as BootstrapButton,
} from 'react-bootstrap'

import styled from 'styled-components'

import { theme } from './theme'

interface ICaseStyle {
  imageUrl: string
}

interface ICaseTypeProps {
  width?: string
  height?: string
}

interface ISidebarStyle {
  height?: string
}

interface IIconStyle {
  width?: string
  height?: string
}

interface ITextContainerStyle {
  margin?: string
}

interface ITextStyle {
  fontSize?: string
}

interface IButtonStyle {
  img?: string
  hoverImg?: string
}

export const Container = styled.div`
  width: 100vw;
  padding-top: 25vh;
`

export const ImageContainer = styled.div`
  position: relative;
  height: 1vh;
`

export const ImageCarouselItems = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const ImageHeaderContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 12vh 12.5vw;

  @media only screen and (max-width: 770px) {
    padding: 12vh 9vw;
  }
`

export const Image = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: black;

  > img {
    min-width: 100%;
    opacity: 0.5;
  }
`

export const Title = styled.p`
  margin: 20px 0;
  font-size: 3.3rem;
  font-weight: 700;
  line-height: 1;
  color: white;

  @media only screen and (max-width: 770px) {
    font-size: 2rem;
  }
`

export const CaseType = styled.div<ICaseTypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : '80px')};
  height: ${props => (props.height ? props.height : '35px')} !important;
  padding-top: 2px;
  margin-right: 10px;
  font-size: calc(${props => props.height} / 2);
  font-weight: 600;
  color: white;
  background-color: ${theme.colors.secondary};
  border-radius: 5px;
`

export const Pipe = styled.div`
  width: 130px;
  height: 3px !important;
  background-color: ${theme.colors.secondary};
`

export const SidebarCotainer = styled.div<ISidebarStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: ${props => (props.height ? props.height : '60px')} !important;
`

export const User = styled.div<IIconStyle>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin-right: 10px;

  img {
    width: ${props => (props.width ? props.width : '20px')};
    height: ${props => (props.height ? props.height : '20px')};
  }

  p {
    padding-top: 3px;
    margin: 0;
    margin-left: 10px;
    font-size: calc(${props => props.height} / 1.5);
    line-height: 1;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`

export const Date = styled.div<IIconStyle>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  margin-right: 10px;

  img {
    width: ${props => (props.width ? props.width : '20px')};
    height: ${props => (props.height ? props.height : '20px')};
  }

  p {
    padding-top: 3px;
    margin: 0;
    margin-left: 10px;
    font-size: calc(${props => props.height} / 1.5);
    line-height: 1;
    color: #c9c9c9;

    @media only screen and (max-width: 770px) {
      font-size: 0.8rem;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  margin: 200px auto 50px auto;

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    max-width: 100%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) {
    max-width: 90rem;
  }
`

export const Content = styled.div`
  width: 63%;

  @media (min-width: 320px) and (max-width: 992px) {
    width: 100%;
  }
`

export const CasesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 150px auto 50px auto;

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0 20px;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) {
    max-width: 90rem;
  }
`

export const CaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 15rem;

  @media (min-width: 320px) and (max-width: 992px) {
    align-items: center;
    max-width: 18rem;
  }
`

export const TextContainer = styled.div<ITextContainerStyle>`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: ${props => (props.margin ? props.margin : '15px 0px 0px 0px')};

  @media (min-width: 320px) and (max-width: 992px) {
    align-items: center;
    margin-top: 5px;
    margin-left: 16px;
  }
`

export const VerticalPipe = styled.div`
  position: absolute;
  left: 0;
  width: 3px !important;
  height: 100%;
  background-color: ${theme.colors.secondary};
`

export const Text = styled.div<ITextStyle>`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  padding-top: 2px;
  margin-left: 10px;
  overflow: hidden;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
  font-weight: 700;
  line-height: 1;
  color: ${props => props.theme.colors.primary};
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  span {
    font-weight: 500;
  }

  @media (min-width: 320px) and (max-width: 992px) {
    margin-left: 10px;
    font-size: 1.3rem;
  }
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const FilterContainer = styled.div`
  position: absolute;
  top: 89%;
  z-index: 29;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;

  @media (min-width: 320px) and (max-width: 992px) {
    height: auto;
  }
`

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px 60px;
  border-radius: 10px;
  border-bottom: 1px solid ${theme.colors.gray[100]};

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    max-width: 100%;
    padding: 20px;
  }

  @media (min-width: 1280px) {
    max-width: 75rem;
  }

  @media (min-width: 1440.99px) {
    max-width: 90rem;
  }
`

export const InputFormControl = styled(FormControl)`
  height: 55px;
  border: 1px solid ${theme.colors.gray[400]};
  border-radius: 31px;

  &:focus {
    background: #eff3f6;
    box-shadow: none;
  }
`
export const InputContainer = styled(InputGroup)`
  width: 40%;

  @media only screen and (max-width: 828px) {
    width: 100%;
  }
`

export const SearchIcon = styled.img`
  width: 34px;
  height: 22px;
`

export const ButtonInput = styled(BootstrapButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
  border: none;

  :active {
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }

  :hover {
    background-color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: 828px) {
    font-size: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 828px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`

export const LoadMoreButton = styled.div`
  display: flex;
  grid-area: BT;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  border: 1.5px solid ${props => props.theme.colors.secondary};
  padding: 1.5rem;

  :hover {
    color: white;
    background-color: ${theme.colors.secondary};
  }

  @media (min-width: 320px) and (max-width: 992px) {
    margin: 5vh auto;
  }
`

export const IconButton = styled.div<IButtonStyle>`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const Button = styled.button<IButtonStyle>`
  display: flex;
  height: 50px;
  padding: 17px;
  margin-right: 15px;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${theme.colors.link};
  border: none;
  background: none;

  :hover {
    color: ${theme.colors.secondary};
    border-bottom: 4px solid ${props => props.theme.colors.secondary};
  }

  @media only screen and (max-width: 828px) {
    padding: 18px 14px;
    margin-right: 0;
  }
`

export const DateCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px !important;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: ${theme.colors.white};
  background-color: ${theme.colors.secondary};
  border-radius: 10px;

  span {
    margin-bottom: -5px;
    font-size: 2rem;
  }
`

export const ReturnButtonContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 233px;
  height: 49px;
  margin-bottom: 30px;
  cursor: pointer;
  border-radius: 10px;

  span {
    padding-top: 2px;
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.colors.primary};

    @media only screen and (max-width: 828px) {
      font-size: 1.3rem;
    }
  }

  img {
    width: 25px;
    height: 20px;
    margin-right: 10px;
  }

  :hover {
    transform: scale(0.98);
  }

  @media only screen and (max-width: 828px) {
    width: 100%;
  }
`

export const Post = styled.div`
  padding-top: 20px;
  color: ${theme.colors.primary};

  h1 {
    font-size: calc(1.375rem + 1.5vw);
    font-weight: 700;
    line-height: 1.5;

    @media (min-width: 1600px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
    font-weight: 700;
    line-height: 1.5;

    @media (min-width: 1600px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.5rem + 0.6vw);
    font-weight: 700;
    line-height: 1.5;

    @media (min-width: 1600px) {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
    font-weight: 700;
    line-height: 1.5;

    @media (min-width: 1600px) {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
  }

  h6 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
  }

  p {
    margin-bottom: 15px;
    font-size: 1.125rem;
    line-height: 1.4;
  }

  img {
    width: 100%;
    height: auto;
    padding: 1vh 0;
  }

  strong {
    font-weight: 700;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const TextPipe = styled.div`
  width: 100px;
  height: 3px;
  margin-top: 30px;
  margin-bottom: 12px;
  background-color: ${theme.colors.secondary};
`

export const NewsTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  color: ${theme.colors.primary};
`

export const BlogContainer = styled.div`
  margin-top: 20vh;
  padding: 0 10vw;
`

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 66%;
  margin: 50px;
`

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 0 2vw;
  justify-content: space-between;
  flex-basis: 80%;

  @media (min-width: 320px) and (max-width: 992px) {
    flex-direction: column;
    align-content: center;
  }
`

export const ArticleTag = styled.div`
  padding: 0.5rem 1rem;
  background: ${theme.colors.secondary};
  max-width: fit-content;
  border-radius: 5px;
  margin: 10px 0;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 0.75rem;
`
export const ArticleTitle = styled.div`
  font-weight: 900;
  font-size: 2rem;
`

export const ArticleDate = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 10px;

  > img {
    margin-right: 0.5rem;
  }

  > p {
    color: ${theme.colors.gray[550]};
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`

export const SidebarContainer = styled.div`
  padding: 0 2vw;
  align-self: start;

  @media only screen and (max-width: 828px) {
    align-self: center;
    display: block;
  }
`

export const SidebarLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray[200]};
  margin: 5vh 0;
`
