import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getModal } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../../../features/auth/authApiSlice'
import {
  setUser,
  setAccessToken,
  setRefreshToken,
} from '../../../features/auth/authSlice'
import { isModalOpen } from '../../../features/modal/modalSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [login, { isLoading, isError, error }] = useLoginUserMutation({})

  useEffect(() => {
    if (isError) {
      // console.log(error.data.detail)
      setErrorMessage('Неверный логин или пароль')
    }
  }, [error, isError])

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const tokens = await login({
        email,
        password,
      }).unwrap()

      dispatch(setAccessToken(tokens.access_token))
      dispatch(setRefreshToken(tokens.refresh_token))

      dispatch(setUser(true))
      setErrorMessage(null)
      dispatch(isModalOpen(false))

      dispatch(setAccessToken(tokens.access_token))
      dispatch(setRefreshToken(tokens.refresh_token))

      dispatch(setUser(true))
      setErrorMessage(null)
      dispatch(isModalOpen(false))
      navigate('/profile')
    } catch (err) {
      // console.log(err)
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
          type="password"
          onChange={(event) => handlePassword(event)}
          placeholder={'Пароль'}
          width="278px"
        />

        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit" margin="60px 0 20px 0" width="278px">
          {isLoading ? 'Loading' : ' Войти'}
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
