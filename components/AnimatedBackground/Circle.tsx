import React from 'react'
import * as S from './Circle.style'

const Circle = ({ children }) => {
  const circles = [
    {
      position: 0,
      translatePosition: '-99px',
      timer: '25s',
      type: 'small',
    },
    {
      position: 0,
      translatePosition: '-165px',
      timer: '35s',
      urlimage: '/logo/dropbox.png',
      type: 'default',
    },
    {
      position: 90,
      translatePosition: '-213px',
      timer: '40s',
      urlimage: '/logo/drive.png',
      type: 'default',
    },
    {
      position: 180,
      translatePosition: '-213px',
      timer: '40s',
      type: 'small',
    },
    {
      position: 0,
      translatePosition: '-262px',
      timer: '50s',
      urlimage: '/logo/hubspot.png',
      type: 'default',
    },
    {
      position: 180,
      translatePosition: '-262px',
      timer: '50s',
      urlimage: '/logo/mailchimp.png',
      type: 'default',
    },
    {
      position: 270,
      translatePosition: '-312px',
      timer: '50s',
      urlimage: '/logo/magento.png',
      type: 'default',
    },
    {
      position: 0,
      translatePosition: '-364px',
      timer: '50s',
      type: 'small',
    },
    {
      position: 0,
      translatePosition: '-463px',
      timer: '60s',
      type: 'small',
    },
    {
      position: 0,
      translatePosition: '-614px',
      timer: '70s',
      type: 'small',
    },
  ]

  return (
    <S.Container>
      <S.BackgroundCircleContainer>
        <S.CircleContainer width="1230px" height="1230px">
          <S.CircleContainer width="930px" height="930px">
            <S.CircleContainer width="730px" height="730px">
              <S.CircleContainer width="630px" height="630px">
                <S.CircleContainer width="530px" height="530px">
                  <S.CircleContainer width="430px" height="430px">
                    <S.CircleContainer width="330px" height="330px">
                      <S.CircleContainer width="200px" height="200px">
                        {circles.map(circle => {
                          return (
                            <S.Circle
                              type={circle.type}
                              position={circle.position}
                              timer={circle.timer}
                              translatePosition={circle.translatePosition}
                            >
                              <img src={circle.urlimage} />
                            </S.Circle>
                          )
                        })}
                        <S.Logo src="/logo/devapi.png" />
                      </S.CircleContainer>
                    </S.CircleContainer>
                  </S.CircleContainer>
                </S.CircleContainer>
              </S.CircleContainer>
            </S.CircleContainer>
          </S.CircleContainer>
        </S.CircleContainer>
      </S.BackgroundCircleContainer>
      {children}
    </S.Container>
  )
}

export { Circle }
