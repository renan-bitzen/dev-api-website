import Head from 'next/head'

import React from 'react'
import { Hero } from '../../components/Hero'
import * as S from '../../styles/plans'
import { cardPlanItems } from '../../constants/cardPlanItems'
import { ICardPlanItems } from '../../components/CardPlans/CardPlans.interface'
import { CardPlans } from '../../components/CardPlans'

import { constumersMobile, costumers } from '../../constants/costumers'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import dynamic from 'next/dynamic'
import QuoteCarousel from '../../components/QuoteCarousel'
import { quotes } from '../../constants/quotes'
import { FreeTest } from '../../components/FreeTest'
import { ListColumn } from '../../components/ListColumn'

import { listIntegration } from '../../constants/listIntegration'
import { Acordion } from '../../components/Acordion'

import { commonQuestions } from '../../constants/commonQuestions'
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

const Plans = () => {
  const cards: ICardPlanItems[] = cardPlanItems
  const listItegration = listIntegration
  const listQuestions = commonQuestions
  const { width } = useWindowDimensions()
  const isMobile = width <= 1024
  return (
    <>
      <Head>
        <title>DevApi – Planos personalizados para você!</title>
        <meta
          property="og:title"
          content="É a hora de acelerar a transformação"
          key="title"
        />
        <meta
          property="og:description"
          content="cDevApi é o Integrador de Sistemas (iPaaS), Seguro e Confiável, Integre Seus Sistemas de Gestão, Logística, Marketing e Ecommerce Agora. Acesse e Confira!"
          key="description"
        />
        <link rel="canonical" href="https://devapi.com.br/plano" />
      </Head>
      <Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            <span> É a hora de </span>acelerar a transformação
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
        <S.FreeTestContainer>
          <FreeTest />
        </S.FreeTestContainer>

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
            <S.ButtonContainer>
              <Button
                text="Quero integrar meus sistemas"
                type="default"
                size="default"
              />
            </S.ButtonContainer>
          </S.ListColumnContainer>
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
            <Button text="Vamos conversar" type="default" size="default" />
          </S.ButtonContainer>
        </S.AcordionContainer>
      </S.Container>
    </>
  )
}

export default Plans
