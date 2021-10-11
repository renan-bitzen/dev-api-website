import React, { useState } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { BiPlus } from 'react-icons/bi'

import Link from '../Link'
import SocialVertical from './Social'

import { IHeaderMenuProps } from '../Header.interface'

import * as S from './Menu.styles'
import { theme } from '../../../styles/theme'

const Menu = ({ isOpen, close, navLinks }: IHeaderMenuProps) => {
  const [openCollapse, setOpenCollapse] = useState('0')

  const handleClickCollapse = (index: string) => {
    if (index !== openCollapse) {
      setOpenCollapse(index)
    } else {
      setOpenCollapse('')
    }
  }

  return (
    <>
      <S.Menu isOpen={isOpen}>
        <S.Container>
          <S.Close onClick={close}>
            <span>Fechar</span>
            <VscChromeClose />
          </S.Close>

          <S.Nav>
            <ul>
              <li>
                <Link href="/" activeClassName="activeLink">
                  <a title="Home" onClick={close}>
                    Home
                  </a>
                </Link>
              </li>
              {navLinks.map((link, index) => {
                return (
                  <React.Fragment key={index}>
                    {link.dropDown ? (
                      <S.Accordion activeKey={openCollapse}>
                        <S.Card>
                          <S.CardHeader
                            onClick={() =>
                              handleClickCollapse(index.toString())
                            }
                          >
                            <S.Title isActive={link.isActive}>
                              {link.name}
                            </S.Title>
                            <S.AccordionToggle eventKey={index.toString()}>
                              <BiPlus color={theme.colors.primary} />
                            </S.AccordionToggle>
                          </S.CardHeader>
                          <S.AccordionCollapse eventKey={index.toString()}>
                            <S.CardBody>
                              <S.Subnav>
                                <ul>
                                  {link.dropDown &&
                                    link.dropDown.map((item, index) => {
                                      return (
                                        <li key={index}>
                                          <Link href={item.url}>
                                            <S.LinkDropdown
                                              isActive={item.isActive}
                                              title={item.name}
                                              onClick={close}
                                            >
                                              {item.name}
                                            </S.LinkDropdown>
                                          </Link>
                                        </li>
                                      )
                                    })}
                                </ul>
                              </S.Subnav>
                            </S.CardBody>
                          </S.AccordionCollapse>
                        </S.Card>
                      </S.Accordion>
                    ) : (
                      <S.Plans>
                        <Link href="/planos" activeClassName="activeLink">
                          <a title="Planos" onClick={close}>
                            Planos
                          </a>
                        </Link>
                      </S.Plans>
                    )}
                  </React.Fragment>
                )
              })}
            </ul>
          </S.Nav>

          <SocialVertical />

          <S.BgCicle />

          <S.SignUp>Fazer teste gratuito</S.SignUp>
        </S.Container>
      </S.Menu>
    </>
  )
}

export { Menu }
