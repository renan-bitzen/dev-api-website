import React from 'react'

import Link from 'next/link'

import { IButtonProps } from './ButtonLink.interface'

import * as S from './ButtonLink.style'

const ButtonLink = ({
  text,
  href,
  target,
  type,
  size,
  margin,
}: IButtonProps) => {
  return (
    <S.Container type={type} size={size} margin={margin}>
      <Link href={href}>
        <a title={text} target={target}>
          {text}
        </a>
      </Link>
    </S.Container>
  )
}

export { ButtonLink }
