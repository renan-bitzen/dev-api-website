import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { costumers } from '../../constants/costumers'
import { Hero } from '../../components/Hero'
import { CallToAction } from '../../components/CallToAction'
import { ListIconCostumer } from '../../components/ListIconCostumer'
import * as S from '../../styles/about'

const About = () => {
  return (
    <>
      <Head>
        <title>DevApi | Sobre nós</title>
        <link rel="canonical" href="https://www.devapi.com.br/sobre" />
      </Head>

      <Head>
        <title>DevApi | Sobre nós</title>
        <meta property="og:title" content="DevApi | Sobre nós" />
        <meta property="og:url" content="https://www.devapi.com.br/sobre" />
        <meta property="description" content="Sobre nós" />
        <link rel="canonical" href="https://www.devapi.com.br/sobre" />
      </Head>

      <Hero minHeight={40} maxHeight={65}>
        <S.HeroContainer>
          <S.Pipe />
          <h1>
            Sobre <b>nós</b>
          </h1>
        </S.HeroContainer>
      </Hero>

      <S.Content>
        <S.Wrapper>
          <img src="/images/about-connect.svg" alt="DevApi Connect" />

          <S.Title>
            <hr />
            <h2>
              Como nasceu <b>a DevApi?</b>
            </h2>
          </S.Title>

          <S.Text>
            <p>
              A DevApi, plataforma de integração de sistemas e gerenciamento de
              APIs (iPaaS & API Manager), foi criada e desenvolvida a partir da
              necessidade de otimizar tempo e rentabilidade financeira nas
              integrações de sistemas, que são traumáticas para empresas de
              todos os segmentos e portes. Com custos expressivamente menores,
              mitigando erros e agilizando processos morosos e de alta
              complexidade, a DevApi ajuda as empresas a desbloquear todo o seu
              potencial de inovação e a acelerar o crescimento ao conectar todas
              as áreas da organização.
            </p>
            <p>
              Simplificamos integrações complexas! Nosso propósito é
              revolucionar globalmente a experiência em integração de sistemas e
              APIs. Toda a plataforma roda em cloud, no modelo SaaS. A DevApi é
              um produto desenvolvido com tecnologia de ponta e as melhores
              práticas de UX. Encaixe as peças da sua operação!
            </p>
          </S.Text>
        </S.Wrapper>
        <S.Wrapper>
          <S.ListIconContainer>
            <ListIconCostumer
              items={costumers}
              title={
                <S.ListIconlTitle>
                  <S.PipeContainer>
                    <S.Pipe />
                  </S.PipeContainer>
                  Empresas que já desbloquearam o{' '}
                  <span>poder da integração de sistemas</span>
                </S.ListIconlTitle>
              }
            />
          </S.ListIconContainer>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>
            <hr />
            <h2>
              <b>Founders</b>
            </h2>
          </S.Title>

          <S.Founders>
            <S.Card>
              <img
                src="/images/founder-william-cto.png"
                alt={'William Hoffman - CTO'}
              />
              <Link href="https://www.linkedin.com/in/williamhoffmann/">
                <a title="William Hoffmann" target="_blank" rel="noopener">
                  William Hoffmann
                </a>
              </Link>
              <span>Chief Technology Officer</span>
              <hr />
            </S.Card>
            <S.Card>
              <img src="/images/founder-luana-ceo.png" alt={'Luana - CEO'} />
              <Link href="https://www.linkedin.com/in/luanaribeiromelo/">
                <a title="Luana Ribeiro" target="_blank" rel="noopener">
                  Luana Ribeiro
                </a>
              </Link>
              <span>Chief Executive Officer</span>
              <hr />
            </S.Card>
          </S.Founders>
        </S.Wrapper>

        <CallToAction />
      </S.Content>
    </>
  )
}

export default About
