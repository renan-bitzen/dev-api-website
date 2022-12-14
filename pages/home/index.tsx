import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { BoxReverse } from '../../components/BoxReverse'
import { ButtonLink } from '../../components/ButtonLink'
import { CompanyBenefits } from '../../components/CompanyBenefits'
import { Customers } from '../../components/Customers'
import { benefits } from '../../constants/benefits'
import { businessCards } from '../../constants/businessCards'
import { connectors, connectorsMobile } from '../../constants/connectors'
import { customers } from '../../constants/customers'
import { featuresCard } from '../../constants/featuresCard'
import { transformCard } from '../../constants/transformCard'
import { plataformDetails } from '../../constants/plataformDetails'
import { advantagesList } from '../../constants/advantagesList'
import { quotes } from '../../constants/quotes'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import * as S from '../../styles/home'
import { inlineCustomers } from '../../constants/inlineCustomers'
import { NewsletterFooter } from '../../components/NewsletterFooter'
import { CustomersContainer } from '../../components/CustomersContainer'

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

const QuoteCarouselWithOutSSR = dynamic(
  () => import('../../components/QuoteCarousel'),
  {
    ssr: false,
  },
)

const Home = () => {
  const { width } = useWindowDimensions()

  const isMobile = width <= 1024

  return (
    <>
      <Head>
        <title>DevApi | Integração de Sistemas e Gestão de APIs</title>
        <meta
          property="og:title"
          content="DevApi | Integração de Sistemas e Gestão de APIs"
          key="title"
        />
        <meta
          name="description"
          content="Plataforma iPaaS para integrar sistemas, automatizar processos, orquestrar dados e gerenciar APIs. Saiba mais!"
        />
        <meta
          property="og:description"
          content="Plataforma iPaaS para integrar sistemas, automatizar processos, orquestrar dados e gerenciar APIs. Saiba mais!"
          key="description"
        />
        <meta property="og:url" content="https://www.devapi.com.br" />
      </Head>

      <S.Hero>
        <S.HeroContent>
          <S.Pipe />
          <h1>
            <b>Integração de Sistemas e Gestão de APIs</b>
          </h1>
          <p>
            Sem limites: uma única plataforma para integrar sistemas,
            automatizar processos, orquestrar dados e gerenciar APIs.
          </p>

          <ButtonLink
            text="Quero uma demonstração"
            href="/converse-com-especialista"
            target="_self"
            size="default"
            type="default"
          />
        </S.HeroContent>
        <S.GifContainer>
          <img src="/backgrounds/bg-hero.png" />
        </S.GifContainer>
      </S.Hero>

      <S.Content>
        <S.PlatformContainer>
          <S.Platform>
            <S.Pipe />
            <h2>
              <span> Encaixe as peças da sua operação!</span>
            </h2>

            <p>
              Otimize processos e gerencie APIs. Automatize dados e toda a
              operação da sua empresa. Integre sistemas em uma única plataforma
              e invista tempo para a estratégia do seu negócio.
            </p>

            <p>
              Tenha sua organização totalmente integrada ao universo da
              transformação digital.
            </p>
          </S.Platform>

          <S.PlatformDetails>
            {plataformDetails.map((item, index) => {
              return (
                <S.DetailsContainer key={index}>
                  <S.DetailsCard>
                    <img src={item.urlImage} alt={item.text} />
                  </S.DetailsCard>
                  <S.DetailsText>
                    <p>{item.text}</p>
                    <span>{item.detail}</span>
                  </S.DetailsText>
                </S.DetailsContainer>
              )
            })}
          </S.PlatformDetails>
        </S.PlatformContainer>

        <S.Carrousel>
          {isMobile ? (
            <CarrouselWithOutSSR
              items={connectorsMobile}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    Mais de&nbsp;<b>300 conectores</b> pré-construídos e prontos
                    para uso
                  </h2>
                </S.CarrouselTitle>
              }
            />
          ) : (
            <MultiCarrouselWithOutSSR
              itemsPerSlide={11}
              interval={2000}
              items={connectors}
              title={
                <S.CarrouselTitle>
                  <S.Pipe />
                  <h2>
                    Mais de <b>300 conectores</b> pré-construídos e prontos para
                    uso
                  </h2>
                </S.CarrouselTitle>
              }
            />
          )}
        </S.Carrousel>

        <S.ButtonContainer>
          <ButtonLink
            text="Ver conectores"
            href="/conectores"
            target="_self"
            size="default"
            type="default"
          />
        </S.ButtonContainer>

        <S.Spacing></S.Spacing>

        <S.FeaturesContainer>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              Garanta que os sistemas da sua empresa <b>estejam integrados</b>
            </h2>
          </S.JoinNowContainer>

          <S.SystemContainer>
            <S.CardSystemContainer>
              <h2>
                <b>iPaaS</b>
              </h2>
              <S.SystemImageContainer>
                <S.SystemImage src="/images/ipaas.svg" alt="iPaas" />
              </S.SystemImageContainer>
              <p>
                Plataforma de Integração de Sistemas como Serviço que agiliza a
                integração entre sistemas, a orquestração de dados e a
                automatização de processos, tanto na nuvem como on-premise. O
                iPaaS da DevApi funciona como um tradutor universal entre todos
                os sistemas, integrando os diferentes softwares.
              </p>
            </S.CardSystemContainer>
            <S.CardSystemContainer>
              <h2>
                <b>API Manager</b>
              </h2>
              <S.SystemImageContainer>
                <S.SystemImage
                  src="/images/api-manager.svg"
                  alt="API Manager"
                />
              </S.SystemImageContainer>
              <p>
                Com o API Manager da DevApi sua empresa pode construir,
                distribuir e gerenciar APIs de maneira veloz e altamente
                escalável, com uma arquitetura ágil, robusta e muito segura.
                Fundamental para desenvolver, monitorar, distribuir e monetizar
                APIs, expandindo o ecossistema entre instituições, clientes,
                fornecedores e parceiros.
              </p>
            </S.CardSystemContainer>
          </S.SystemContainer>
        </S.FeaturesContainer>

        <S.TransformContainer>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              <b>Transforme a sua empresa!</b>
            </h2>
            <p>
              Tenha processos ágeis, seguros e eficientes. Escale a operação,
              impulsione a inovação e ganhe vantagem competitiva.
            </p>
          </S.JoinNowContainer>

          <S.Features>
            {transformCard.map((item, index) => {
              return (
                <S.FeatureCard key={index}>
                  <a href={item.url} target="_self" rel="noreferrer">
                    <S.Icon>
                      <img src={item.icon} alt={item.title} />
                    </S.Icon>
                    <S.Text>
                      <b>{item.title}</b>
                      <p>{item.text}</p>
                    </S.Text>
                  </a>
                </S.FeatureCard>
              )
            })}
          </S.Features>
        </S.TransformContainer>

        <S.FeaturesContainer>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              Vantagens para a <b>sua empresa</b>
            </h2>
          </S.JoinNowContainer>

          <S.AdvantagesContainer>
            <ul>
              {advantagesList.map((item, index) => {
                return (
                  <li key={index}>
                    <img src="/icons/check.svg" alt="Checkmark"></img>&nbsp;
                    {item.text}
                  </li>
                )
              })}
            </ul>
          </S.AdvantagesContainer>
        </S.FeaturesContainer>

        <S.CasesContainer>
          <S.Cases>
            <S.Pipe />
            <h2>
              Grandes empresas usam a DevApi para integrar com
              <span> velocidade e segurança</span>
            </h2>
          </S.Cases>
        </S.CasesContainer>

        <S.QuoteContainer>
          {quotes.map((item, index) => {
            return (
              <S.QuoteStructure key={index}>
                <S.QuoteAvatar>
                  <img src={item.imageUrl} alt="Avatar" />
                  <S.QuoteTitle>
                    <h3>
                      {item.name} &nbsp;
                      <img src="/icons/quote-mark.svg" alt="Avatar" />
                    </h3>
                    <p>{item.occupation + ' | ' + item.company}</p>
                  </S.QuoteTitle>
                </S.QuoteAvatar>
                <S.QuoteText>
                  <p>{item.quote}</p>
                </S.QuoteText>
              </S.QuoteStructure>
            )
          })}
        </S.QuoteContainer>

        <S.DemoContainer>
          <S.JoinNowContainer>
            <S.Pipe />
            <h2>
              Encaixe todas as peças da sua operação{' '}
              <b>com a integração de sistemas</b>
            </h2>

            <S.ButtonContainer>
              <ButtonLink
                text="Quero uma demonstração"
                href="/converse-com-especialista"
                target="_self"
                size="default"
                type="default"
              />
            </S.ButtonContainer>
          </S.JoinNowContainer>
        </S.DemoContainer>

        <CustomersContainer></CustomersContainer>

        <NewsletterFooter></NewsletterFooter>
      </S.Content>
    </>
  )
}

export default Home
