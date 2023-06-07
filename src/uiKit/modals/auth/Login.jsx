import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import { useState } from 'react'
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

import { ThreeDots } from 'react-loading-icons'

import { useTranslation } from 'react-i18next'

const Login = () => {
  const { t } = useTranslation(['auth'])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [login, { isLoading }] = useLoginUserMutation({})

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (email === '' && password === '') {
      setErrorMessage(t('enterEmailAndPassword'))
    } else if (email === '') {
      setErrorMessage(t('enterEmail'))
    } else if (password === '') {
      setErrorMessage(t('enterPassword'))
    } else {
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
        console.log(err)
        setErrorMessage(t('wrongCredentials'))
      }
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
          placeholder={t('email')}
          width="278px"
          type="email"
        />
        <Input
          type="password"
          onChange={(event) => handlePassword(event)}
          placeholder={t('password')}
          width="278px"
        />

        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit" margin="60px 0 20px 0" width="278px">
          {isLoading ? <ThreeDots /> : t('login')}
        </Button>
        <WhiteSignUpButton
          onClick={() => {
            dispatch(getModal('sign-up'))
          }}
        >
          {t('signUp')}
        </WhiteSignUpButton>
      </Form>
    </>
  )
}

export default Login
