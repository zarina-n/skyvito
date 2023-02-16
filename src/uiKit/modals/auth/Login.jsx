import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import { useState } from 'react'

import { getModal } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../../../features/auth/authApiSlice'
import { setUser } from '../../../features/auth/authSlice'
import { isModalOpen } from '../../../features/modal/modalSlice'

const Login = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const [login, { isLoading, isError }] = useLoginUserMutation({
    email,
    password,
  })

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await login({
        email,
        password,
      }).unwrap()

      dispatch(setUser(true))
      setErrorMessage(null)
      dispatch(isModalOpen(false))
    } catch (err) {
      setErrorMessage(err)
    }
  }

  return (
    <>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <LogoContainer>
          <Logo src="/img/AuthLogo.png" />
        </LogoContainer>

        <Input
          onChange={(event) => handleEmail(event)}
          placeholder={'Email'}
          width="278px"
        />
        <Input
          onChange={(event) => handlePassword(event)}
          placeholder={'Пароль'}
          width="278px"
        />

        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit" margin="60px 0 20px 0" width="278px">
          Войти
        </Button>
        <WhiteSignUpButton
          onClick={() => {
            dispatch(getModal('sign-up'))
          }}
        >
          Зарегистрироваться
        </WhiteSignUpButton>
      </Form>
    </>
  )
}

export default Login
