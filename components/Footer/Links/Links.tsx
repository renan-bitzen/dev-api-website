import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { IContainerLinkProps } from './Links.interfaces'
const Links = ({ title, links }: IContainerLinkProps) => {
  const handleLiks = links.map((link, index) => {
    return (
      <>
        <Link key={index} href={link.url}>
          <a title={link.name}>{link.name}</a>
        </Link>
      </>
    )
  })

  return (
    <S.ContainerLink>
      <S.TitleLink>{title}</S.TitleLink>
      {handleLiks}
    </S.ContainerLink>
  )
}

export { Links }
