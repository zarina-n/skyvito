import Input from '../../inputs/Input'
import Button from '../../buttons/Button'
import WhiteSignUpButton from '../../buttons/WhiteSignUpButton'
import { Form, LogoContainer, Logo } from './Auth.styled'
import Modal from '../modal/Modal'
import { useState } from 'react'
import SignUp from './SignUp'

const Login = () => {
  return (
    <>
      <Modal>
        <SignUp />
      </Modal>
      <Form>
        <LogoContainer>
          <Logo src="/img/AuthLogo.png" />
        </LogoContainer>

        <Input placeholder={'Email'} width="278px"></Input>
        <Input placeholder={'Пароль'} width="278px"></Input>

        <Button type="submit" margin="60px 0 20px 0" width="278px">
          Войти
        </Button>
        <WhiteSignUpButton>Зарегистрироваться</WhiteSignUpButton>
      </Form>
    </>
  )
}

export default Login
