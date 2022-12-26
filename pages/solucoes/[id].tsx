import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Circle } from '../../components/AnimatedBackground'
import { ButtonLink } from '../../components/ButtonLink'
import { Customers } from '../../components/Customers'
import { Hero } from '../../components/Hero'
import { ProfessionalService } from '../../components/ProfessionalService'
import QuoteCarousel from '../../components/QuoteCarousel'
import { customers } from '../../constants/customers'
import { quotes } from '../../constants/quotes'
import { ISolutionPage, solutionsPage } from '../../constants/solutionsPage'
import * as S from '../../styles/solutions'
import { NewsletterFooter } from '../../components/NewsletterFooter'
import { CustomersContainer } from '../../components/CustomersContainer'

const IntegrationCardWithoutSSR = dynamic(
  () => import('../../components/IntegrationCard'),
  {
    ssr: false,
  },
)

const Solutions = () => {
  const router = useRouter().asPath

  const [filterPage] = router.split('?')

  const currentPage = filterPage.split('/')

  const page: ISolutionPage =
    solutionsPage[currentPage[currentPage.length - 1]] ||
    solutionsPage['gestao']

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
        <Hero backgroundUrl={page.backgroundUrl}>
          <S.HeroContent>
            <h2
              dangerouslySetInnerHTML={{ __html: `${page.title.pageName}` }}
            ></h2>
            {page && (
              <S.Title
                width={page.title.width}
                dangerouslySetInnerHTML={{ __html: `${page.title.text}` }}
              />
            )}
            {page && <S.Subtitle>{page.subtitle}</S.Subtitle>}

            <ButtonLink
              text="Fale com um especialista"
              href="/converse-com-especialista"
              target="_self"
              size="default"
              type="default"
            />
          </S.HeroContent>
        </Hero>

        <S.Content>
          <S.ContentGrid className={'grid'}>
            <S.SolutionContainer>
              <S.TextContainer>
                <S.TitleContainer>
                  <S.Pipe />
                  {page && page.contentTitle}

                  <S.ParagraphContainer>
                    {page && page.contentText}
                  </S.ParagraphContainer>
                </S.TitleContainer>
              </S.TextContainer>

              <S.AdvantagesContainer>
                <ul>
                  {page &&
                    page.listItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <img src="/icons/check.svg" alt="Checkmark"></img>
                          &nbsp;
                          {item.text}
                        </li>
                      )
                    })}
                </ul>
              </S.AdvantagesContainer>

              <S.IntegrationContainer>
                {page &&
                  (page.title.pageName === 'Empresas 360' ||
                    page.title.pageName === 'Seu produto') &&
                  page.component}
              </S.IntegrationContainer>

              {page?.textJoinNow && (
                <S.JoinNowContainer>
                  <S.PipeJoinNow />
                  {page.textJoinNow}

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
                </S.JoinNowContainer>
              )}
            </S.SolutionContainer>
          </S.ContentGrid>
          <S.ProfessionalServiceContainer>
            <ProfessionalService />
          </S.ProfessionalServiceContainer>
        </S.Content>
      </S.Container>
    </>
  )
}

export default Solutions
