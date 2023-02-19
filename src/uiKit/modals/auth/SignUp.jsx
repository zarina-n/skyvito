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

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate

  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  const yyyy = today.getFullYear()

  if (dd < 10) {
    dd = `0${dd}`
  }

  if (mm < 10) {
    mm = `0${mm}`
  }
  today = `${yyyy}-${mm}-${dd}`
  // console.log(today)

  const [userInfo, setUserInfo] = useState({
    password: '',
    role: 'user',
    email: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
    sells_from: today,
  })

  const [repeatPswd, setRepeatPswd] = useState('')
  const [passwordError, setPasswordError] = useState(null)

  const [signUp, { isLoading, isError }] = useSignUserUpMutation()

  const isValid = userInfo.password === repeatPswd

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (isValid) {
        const response = await signUp({ ...userInfo }).unwrap()
        console.log(response)

        setPasswordError(null)
        setUserInfo('')
        setRepeatPswd('')
        dispatch(setUser(true))

        dispatch(isModalOpen(false))
        navigate('/profile')
      } else {
        console.log('Пароли не совпадают')
        setPasswordError('Пароли не совпадают')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <LogoContainer>
        <Logo src="/img/AuthLogo.png" />
      </LogoContainer>

      <Input
        onChange={(event) =>
          setUser({
            ...userInfo,
            email: event.target.value,
          })
        }
        placeholder={'Email'}
        name="email"
        width="278px"
        required
      />

      <Input
        type="password"
        onChange={(event) =>
          setUser({
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
          setUser({
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
          setUser({
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

      <p>{passwordError}</p>

      <Button type="submit" margin="60px 0 20px 0" width="278px">
        Зарегистрироваться
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
