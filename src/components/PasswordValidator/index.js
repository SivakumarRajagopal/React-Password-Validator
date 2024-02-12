import {useState} from 'react'

import {
  AppContentContainer,
  AppContainer,
  Heading,
  Para,
  InputElement,
  ErrorMsg,
} from './styledComponents'

// Write your code here

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  return (
    <AppContainer>
      <AppContentContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <InputElement
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </AppContentContainer>
    </AppContainer>
  )
}

export default PasswordValidator
