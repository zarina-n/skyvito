import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import { useState } from 'react'

import { getModal, isModalOpen } from '../../../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
import { useSignUserUpMutation } from '../../../features/auth/authApiSlice'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate

  const [user, setUser] = useState({
    password: '',
    role: 'user',
    email: '',
    name: '',
    surname: '',
    phone: '',
    city: '',
  })

  const [repeatPswd, setRepeatPswd] = useState('')
  const [passwordError, setPasswordError] = useState(null)

  const [signUp, { isLoading, isError }] = useSignUserUpMutation()

  const isValid = user.password === repeatPswd

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (isValid) {
        await signUp({ ...user }).unwrap()

        setPasswordError(null)
        setUser('')
        setRepeatPswd('')
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
            ...user,
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
            ...user,
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
            ...user,
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
            ...user,
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
            ...user,
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
