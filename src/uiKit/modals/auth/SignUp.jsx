import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import { useState } from 'react'

import { getModal, isModalOpen } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { useSignUserUpMutation } from '../../../features/auth/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../../features/auth/authSlice'

import { ThreeDots } from 'react-loading-icons'

import { useTranslation } from 'react-i18next'

const SignUp = () => {
  const { t } = useTranslation(['auth'])
  const dispatch = useDispatch()
  const navigate = useNavigate

  const [userInfo, setUserInfo] = useState({
    password: '',
    role: 'user',
    email: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
  })

  const [repeatPswd, setRepeatPswd] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [signUp, { isLoading }] = useSignUserUpMutation()

  const isValid = userInfo.password === repeatPswd && userInfo.email

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (userInfo.email === '' && userInfo.password === '') {
      setErrorMessage(t('enterEmailAndPassword'))
    } else if (userInfo.email === '') {
      setErrorMessage(t('enterEmail'))
    } else if (userInfo.password === '') {
      setErrorMessage(t('enterPassword'))
    } else {
      try {
        if (isValid) {
          await signUp({ ...userInfo }).unwrap()

          setErrorMessage(null)
          setUserInfo('')
          setRepeatPswd('')
          dispatch(setUser(true))

          dispatch(isModalOpen(false))
          navigate('/profile')
        } else {
          setErrorMessage(t('noPasswordMatch'))
        }
      } catch (err) {
        console.log(err)
        setErrorMessage(t('error'))
      }
    }
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <LogoContainer>
        <Logo src="/img/AuthLogo.png" />
      </LogoContainer>

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            email: event.target.value,
          })
        }
        placeholder={t('email')}
        type="email"
        name="email"
        width="278px"
        required
      />

      <Input
        type="password"
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            password: event.target.value,
          })
        }
        placeholder={t('password')}
        name="password"
        width="278px"
        required
      />

      <Input
        type="password"
        onChange={(event) => setRepeatPswd(event.target.value)}
        placeholder={t('repeatPassword')}
        width="278px"
        required
      />

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            name: event.target.value,
          })
        }
        placeholder={t('name')}
        name="name"
        width="278px"
      />

      <Input
        onChange={(event) =>
          setUserInfo({
            ...userInfo,
            surname: event.target.value,
          })
        }
        placeholder={t('surname')}
        name="surname"
        width="278px"
      />

      <Input
        onChange={(event) =>
          setUser({
            ...userInfo,
            city: event.target.value,
          })
        }
        placeholder={t('location')}
        name="city"
        width="278px"
      />

      <p>{errorMessage}</p>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        {isLoading ? <ThreeDots /> : t('signUp')}
      </Button>

      <WhiteSignUpButton
        type="button"
        onClick={() => {
          dispatch(getModal('login'))
        }}
      >
        {t('login')}
      </WhiteSignUpButton>
    </Form>
  )
}

export default SignUp
