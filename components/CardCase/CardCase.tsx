import React from 'react'

import Router from 'next/router'

import { ICardCases } from './CardCase.interface'
import * as S from './CardCase.style'

export const CardCase = ({ cases }: ICardCases) => {
  const handleClickCase = (url: string) => {
    Router.push(`/cases/${url}`)
  }
  return (
    <S.Container>
      {cases.map((value, index) => {
        return (
          <S.CardBox key={index}>
            <S.ImageContainer>
              <img src={value.image_cover} />
            </S.ImageContainer>
            <S.Title>{value.title}</S.Title>
            <S.ContentText>{value.short_text}</S.ContentText>
            <S.ButtonContainer>
              <S.ButtonCard
                type="button"
                onClick={() => handleClickCase(value.link_id)}
              >
                Conheça essa história
              </S.ButtonCard>
            </S.ButtonContainer>
          </S.CardBox>
        )
      })}
    </S.Container>
  )
}
