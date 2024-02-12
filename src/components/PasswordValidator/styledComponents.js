// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AppContentContainer = styled.div`
  background-color: #475569;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 30px;
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 18px;
`

export const InputElement = styled.input`
  background-color: #ffffff;
  border: none;
  outline: none;
  height: 40px;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ef4444;
  font-size: 14px;
`
