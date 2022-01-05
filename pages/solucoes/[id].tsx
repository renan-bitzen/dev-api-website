import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { Circle } from '../../components/AnimatedBackground'
import { ButtonLink } from '../../components/ButtonLink'
import { Hero } from '../../components/Hero'
import { ListIconCostumer } from '../../components/ListIconCostumer'
import { ProfessionalService } from '../../components/ProfessionalService'
import QuoteCarousel from '../../components/QuoteCarousel'
import { costumers } from '../../constants/costumers'
import { quotes } from '../../constants/quotes'
import { ISolutionPage, solutionsPage } from '../../constants/solutionsPage'
import * as S from '../../styles/solutions'

const Solutions = () => {
  const router = useRouter().asPath

  const [filterPage] = router.split('?')

  const currentPage = filterPage.split('/')

  const page: ISolutionPage = solutionsPage[currentPage[currentPage.length - 1]]

  const paragraphWidth = currentPage[2] === 'marketing' ? '80%' : ''

  return (
    <>
      <Head>
        <title>{page ? page.seo.metaTitle : 'Devapi | Soluções'}</title>
        <meta
          name="description"
          content={page ? page.seo.metaTitle : 'Devapi | Soluções'}
        />
      </Head>

      <S.Container>
        <Hero>
          <Circle>
            <S.HeroContent>
              <S.Pipe />

              {page && (
                <S.Title
                  width={page.title.width}
                  dangerouslySetInnerHTML={{ __html: `${page.title.text}` }}
                />
              )}
              {page && <S.Subtitle>{page.subtitle}</S.Subtitle>}

              <ButtonLink
                text="Fale com um consultor"
                href="/converse-com-especialista"
                target="_self"
                size="default"
                type="default"
              />
            </S.HeroContent>
          </Circle>
        </Hero>

        <S.Content>
          <S.SolutionContainer>
            <S.TextContainer>
              <S.TitleContainer>
                <S.Pipe />
                {page && page.contentTitle}
              </S.TitleContainer>

              <S.ParagraphContainer width={paragraphWidth}>
                {page && page.contentText}
              </S.ParagraphContainer>
            </S.TextContainer>

            <S.IntegrationContainer>
              {page && page.component}
            </S.IntegrationContainer>

            <ButtonLink
              text="Quero integrar agora!"
              href="/converse-com-especialista"
              target="_self"
              size="default"
              type="default"
            />
          </S.SolutionContainer>

          <S.QuoteContainer>
            <QuoteCarousel quotes={quotes} />
          </S.QuoteContainer>

          <S.ProfessionalServiceContainer>
            <ProfessionalService />
          </S.ProfessionalServiceContainer>
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
        </S.Content>
      </S.Container>
    </>
  )
}

export default Solutions
