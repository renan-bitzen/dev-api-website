import styled from 'styled-components'
import { theme } from './theme'

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
export const CarrouselContainer = styled.div`
  width: 100%;
  padding: 0 8vw;
  background-size: 76%;
`

export const Container = styled.div`
  padding-top: 13vh;
`

export const QuoteContainer = styled.div`
  padding: 20px 0;
`
