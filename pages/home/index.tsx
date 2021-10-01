import React from 'react'

import { constumersMobile, costumers } from '../../constants/costumers'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import * as S from '../../styles/home'
import dynamic from 'next/dynamic'
import QuoteCarousel from '../../components/QuoteCarousel'
import { quotes } from '../../constants/quotes'
import { Button } from '../../components/Button'
const CarrouselWithOutSSR = dynamic(
  () => import('../../components/Carrousel'),
  {
    ssr: false,
  },
)
const MultiCarrouselWithOutSSR = dynamic(
  () => import('../../components/MultiCarrousel/MultiCarrousel'),
  {
    ssr: false,
  },
)

const Home = () => {
  const { width } = useWindowDimensions()

  const isMobile = width <= 1024

  return (
    <S.Container>
      <S.CostumersCarrouselContainer>
        {isMobile ? (
          <CarrouselWithOutSSR
            items={constumersMobile}
            title={
              <S.CarrouselTitle>
                Empresas que ja desbloquearam o{' '}
                <span>poder da integração de sistemas.</span>
              </S.CarrouselTitle>
            }
          />
        ) : (
          <MultiCarrouselWithOutSSR
            interval={2000}
            items={costumers}
            title={
              <S.CarrouselTitle>
                Empresas que ja desbloquearam o{' '}
                <span>poder da integração de sistemas.</span>
              </S.CarrouselTitle>
            }
          />
        )}
        <S.ActionContainer>
          <S.ActionTextContainer>
            <S.Pipe />
            <h3>
              Quer testar a DevApi <span>gratuitamente?</span>
            </h3>
          </S.ActionTextContainer>
          <Button
            size={'large'}
            text={
              width < 500 ? 'Entrar em contato' : 'Converse com um especialista'
            }
            type={'default'}
          />
        </S.ActionContainer>
      </S.CostumersCarrouselContainer>
      <S.QuoteContainer>
        <QuoteCarousel quotes={quotes} />
      </S.QuoteContainer>
    </S.Container>
  )
}

export default Home
