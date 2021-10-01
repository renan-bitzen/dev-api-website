import React from 'react'
import { IListColumnProps } from './ListColumn.interface'
import * as S from './ListColumn.style'
const ListColumn = ({ list, col }: IListColumnProps) => {
  return (
    <S.ListContainer>
      <S.ListColumn col={col}>
        {list.map((list, index) => {
          return (
            <S.ListItem key={index}>
              <span>{list.text} </span>
            </S.ListItem>
          )
        })}
      </S.ListColumn>
    </S.ListContainer>
  )
}

export { ListColumn }
