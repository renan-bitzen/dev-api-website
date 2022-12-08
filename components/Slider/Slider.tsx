import React from 'react'

import styled from 'styled-components'

import { customers } from '../../constants/customers'
import * as S from './Slider.style'

interface ISliderStyle {
  rotate: number
  color: string
}

const Side = styled.div<ISliderStyle>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 158px;
  height: 150px;
  padding: 1vh;
  overflow: hidden;
  background-color: ${props => props.color};
  transform: ${props => `rotateY(${props.rotate}deg)`} translateZ(3000px);

  > img {
    width: 95%;
    max-height: 88px;
  }
`

const Slider = () => {
  const firstLine = []
  const secondLine = []

  const rotate = 360 / 120

  const customersLength = customers.length

  const customersHalfLength = customersLength / 2

  const halfStart = customers.slice(0, customersHalfLength)
  const halfEnd = customers.slice(customersHalfLength, customersLength)

  firstLine.push(...firstLine, halfStart)
  secondLine.push(...secondLine, halfEnd)

  const firstCount = Number((120 / halfStart.length).toFixed(0))
  const secondCount = Number((120 / halfEnd.length).toFixed(0))

  for (let index = 0; index < firstCount; index++) {
    firstLine.push(...halfStart)
  }

  for (let index = 0; index < secondCount; index++) {
    secondLine.push(...halfEnd)
  }

  return (
    <S.Container>
      <S.Slider>
        <S.SliderAnimation rotate="right">
          {firstLine.map((item, index) => {
            return (
              <Side key={index} color="white" rotate={rotate * (index + 1)}>
                <img src={item.url}></img>
              </Side>
            )
          })}
        </S.SliderAnimation>
      </S.Slider>
      <S.Slider>
        <S.SliderAnimation rotate="left">
          {secondLine.map((item, index) => {
            return (
              <Side key={index} color="white" rotate={rotate * (index + 1)}>
                <img src={item.url}></img>
              </Side>
            )
          })}
        </S.SliderAnimation>
      </S.Slider>
    </S.Container>
  )
}

export { Slider }
