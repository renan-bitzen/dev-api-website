import React from 'react'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Hero } from '../../components/Hero'
import api from '../../services/api'
import * as S from '../../styles/midia'

interface IMidia {
  title: string
  link: string
  image: string
}

interface IMidiasProps {
  midias: IMidia[]
}

const Midias = ({ midias }: IMidiasProps) => {
  return (
    <>
      <Head>
        <title>DevApi | Na mídia</title>
        <meta
          property="og:url"
          content="https://devapi.com.br/devapi-na-midia"
        />
        <meta name="description" content="DevApi na mídia" />
        <link
          rel="canonical"
          href="https://www.devapi.com.br/devapi-na-midia"
        />
      </Head>

      <Hero>
        <S.HeroContainer>
          <S.Pipe />
          <h1>
            DevApi <b>na mídia</b>
          </h1>
          <p>
            Saiba como a DevApi tem sido destaque em grandes portais de
            comunicação e fique por dentro das últimas atualizações do mundo das
            integrações.
          </p>
        </S.HeroContainer>
      </Hero>

      <S.Content>
        <S.Wrapper>
          {midias.map((midia, index) => (
            <S.Card key={index}>
              <img src={midia.image} alt={midia.title} />
              <h3>{midia.title}</h3>
              <S.KnowMoreLink>
                <Link href={midia.link}>
                  <a title="Saiba mais" target="_blank" rel="noreferrer">
                    Saiba mais
                  </a>
                </Link>
              </S.KnowMoreLink>
            </S.Card>
          ))}
        </S.Wrapper>
      </S.Content>
    </>
  )
}

export const getStaticProps: GetServerSideProps = async () => {
  const { data } = await api.get('imprensas')

  const midias = data

  return {
    props: {
      midias,
    },
  }
}

export default Midias
