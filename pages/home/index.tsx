import React from 'react'

import { constumersMobile, costumers } from '../../constants/costumers'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import * as S from '../../styles/home'
import dynamic from 'next/dynamic'
import QuoteCarousel from '../../components/QuoteCarousel'
import { quotes } from '../../constants/quotes'

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

        <QuoteCarousel quotes={quotes} />
      </S.CostumersCarrouselContainer>
    </S.Container>
  )
}

export default Home
