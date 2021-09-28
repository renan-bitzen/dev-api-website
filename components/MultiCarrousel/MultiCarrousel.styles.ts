import Slider from 'react-slick'

import styled from 'styled-components'
export const Container = styled.div`
  padding: 0px 08vh;
`

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
`

export const ImageContainer = styled.div`
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  width: 220px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
`

export const Image = styled.img`
  pointer-events: none;
  object-fit: contain;
  width: 100%;
  height: 90px;
`

export const Carrousel = styled(Slider)`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
