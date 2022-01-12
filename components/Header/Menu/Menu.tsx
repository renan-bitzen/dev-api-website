import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'

import { theme } from '../../../styles/theme'
import { IHeaderMenuProps } from '../Header.interface'
import Link from '../Link'
import * as S from './Menu.styles'
import SocialVertical from './Social'

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
                                              rel="noreferrer"
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
                      <>
                        <S.Plans>
                          <Link href="/cases" activeClassName="activeLink">
                            <a title="Cases" onClick={close} rel="noreferrer">
                              Cases
                            </a>
                          </Link>
                        </S.Plans>
                        <S.Plans>
                          <Link href="/planos" activeClassName="activeLink">
                            <a title="Planos" onClick={close} rel="noreferrer">
                              Planos
                            </a>
                          </Link>
                        </S.Plans>
                      </>
                    )}
                  </React.Fragment>
                )
              })}
            </ul>
          </S.Nav>

          <SocialVertical />

          <S.BgCicle />
        </S.Container>
      </S.Menu>
    </>
  )
}

export { Menu }
