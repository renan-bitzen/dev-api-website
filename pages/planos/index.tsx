import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Acordion } from '../../components/Acordion'
import { ButtonLink } from '../../components/ButtonLink'
import { CallToAction } from '../../components/CallToAction'
import { CardPlans } from '../../components/CardPlans'
import { Hero } from '../../components/Hero'
import { ListColumn } from '../../components/ListColumn'
import QuoteCarousel from '../../components/QuoteCarousel'

import { cardPlanItems } from '../../constants/cardPlanItems'
import { commonQuestions } from '../../constants/commonQuestions'
import { constumersMobile, costumers } from '../../constants/costumers'
import { listIntegration } from '../../constants/listIntegration'
import { quotes } from '../../constants/quotes'

import { useWindowDimensions } from '../../hooks/useWindowDimensions'

import { ICardPlanItems } from '../../components/CardPlans/CardPlans.interface'

import * as S from '../../styles/plans'

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

const Plans = () => {
  const cards: ICardPlanItems[] = cardPlanItems
  const listItegration = listIntegration
  const listQuestions = commonQuestions
  const { width } = useWindowDimensions()
  const isMobile = width <= 1024
  return (
    <>
      <Head>
        <title>Planos | DevApi</title>
        <link rel="canonical" href="https://devapi.com.br/plano" />
      </Head>

      <Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            É a hora de <b>acelerar a transformação</b>
          </h1>
          <p>
            Com a DevApi, conectar sistemas, processos, bancos de dados e
            arquivos é muito mais fácil do que você imagina. Conheça os nossos
            planos!
          </p>
        </S.HeroContent>
      </Hero>
      <S.Container>
        <S.CardContainer>
          <CardPlans cards={cards} />
        </S.CardContainer>

        <S.ContainerItegration>
          <S.CostumersCarrouselContainer>
            <S.PipeContainer>
              <S.Pipe />
            </S.PipeContainer>
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
          </S.CostumersCarrouselContainer>
        </S.ContainerItegration>

        <CallToAction />

        <S.QuoteContainer>
          <QuoteCarousel quotes={quotes} />
        </S.QuoteContainer>

        <S.ListIntegrationContainer>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>
          <S.ListIntegrationTitle>
            <span>Reduza em até 20x o tempo</span> de ter toda a sua empresa
            integrada
          </S.ListIntegrationTitle>
          <S.ListColumnContainer>
            <ListColumn list={listIntegration} />
          </S.ListColumnContainer>
          <S.ButtonContainer>
            <ButtonLink
              text="Quero integrar meus sistemas"
              href="/free-trial"
              target="_self"
              type="default"
              size="large"
            />
          </S.ButtonContainer>
        </S.ListIntegrationContainer>

        <S.AcordionContainer>
          <S.PipeContainer>
            <S.Pipe />
          </S.PipeContainer>
          <S.QuestionsContainer>
            <h2>
              Perguntas <span>frequentes</span>
            </h2>
          </S.QuestionsContainer>
          <Acordion list={listQuestions} />

          <S.ButtonContainer>
            <ButtonLink
              text="Vamos conversar"
              href="/free-trial"
              target="_self"
              type="default"
              size="large"
            />
          </S.ButtonContainer>
        </S.AcordionContainer>
      </S.Container>
    </>
  )
}

export default Plans
