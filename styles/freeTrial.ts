import styled, { css } from 'styled-components'
import { Form as FormikForm } from 'formik'
import { theme } from './theme'

interface IErrorTextStyle {
  hasError: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 13vh 0 10vh 0;
`
export const Title = styled.h2`
  width: 100%;
  margin-bottom: 15px;
`
export const SubTitle = styled.p`
  margin-bottom: 5vh;
  font-size: 1.4rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38vw;
`

export const Form = styled(FormikForm)`
  width: 100%;
  margin-top: 35px;
`
export const DefaultContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 49%;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CheckboxContainer = styled.div`
  width: 49%;
  margin-bottom: 10px;
`
export const DepartamentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 55vh;
  margin-top: 35px;
`
export const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 15vh;
  margin-top: 35px;
`

export const Bolder = styled.span`
  font-weight: bold;
`
export const StepsContainer = styled.div`
  width: 100%;
  margin: 5vh 0;
`

export const ErrorText = styled.p<IErrorTextStyle>`
  font-size: 1.4rem;
  color: ${theme.colors.red[200]};

  ${({ hasError }) =>
    hasError &&
    css`
      margin: 5px 0px;

      ::before {
        content: '•  ';
      }
    `}
`
