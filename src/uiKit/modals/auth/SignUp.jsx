import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import { useState, useEffect } from 'react'

import { getModal, isModalOpen } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { useSignUserUpMutation } from '../../../features/auth/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../../features/auth/authSlice'

import { ThreeDots } from 'react-loading-icons'

const SignUp = () => {
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

  const [signUp, { isLoading, isError }] = useSignUserUpMutation()

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    'gm'
  )
  const isValidEmail = emailRegex.test(userInfo.email)

  useEffect(() => {
    if (isError) {
      setErrorMessage('Неверный логин или пароль')
    } else if (userInfo.email === '' && userInfo.password === '') {
      setErrorMessage('Введите email и пароль')
    } else if (userInfo.email === '') {
      setErrorMessage('Введите email')
    } else if (userInfo.password === '') {
      setErrorMessage('Введите пароль')
    } else if (!isValidEmail) {
      setErrorMessage('Некорректный email')
    }
  }, [isError, isValidEmail, userInfo])

  const isValid = userInfo.password === repeatPswd && isValidEmail

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (isValid) {
        const response = await signUp({ ...userInfo }).unwrap()
        console.log(response)

        setErrorMessage(null)
        setUserInfo('')
        setRepeatPswd('')
        dispatch(setUser(true))

        dispatch(isModalOpen(false))
        navigate('/profile')
      } else {
        console.log('Пароли не совпадают')
        setErrorMessage('Пароли не совпадают')
      }
    } catch (err) {
      console.log(err)
      setErrorMessage('Произошла ошибка')
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
        placeholder={'Email'}
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
        placeholder={'Пароль'}
        name="password"
        width="278px"
        required
      />

      <Input
        type="password"
        onChange={(event) => setRepeatPswd(event.target.value)}
        placeholder={'Повторите пароль'}
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
        placeholder={'Имя (необязательно)'}
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
        placeholder={'Фамилия (необязательно)'}
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
        placeholder={'Город (необязательно)'}
        name="city"
        width="278px"
      />

      <p>{errorMessage}</p>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        {isLoading ? <ThreeDots /> : 'Зарегистрироваться'}{' '}
      </Button>

      <WhiteSignUpButton
        type="button"
        onClick={() => {
          dispatch(getModal('login'))
        }}
      >
        Войти
      </WhiteSignUpButton>
    </Form>
  )
}

export default SignUp
