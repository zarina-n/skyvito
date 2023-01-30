import { Link, Outlet } from 'react-router-dom'
import { Header, Nav, Main } from './RouteLayout.styled'
import { useState } from 'react'
import Search from '../components/search/Search'
import HeaderButton from '../uiKit/buttons/HeaderButton'
import Modal from '../uiKit/modals/modal/Modal'
import Login from '../uiKit/modals/auth/Login'
import SignUp from '../uiKit/modals/auth/SignUp'

const RouteLayout = () => {
  const [open, setOpen] = useState(false)
  const user = false
  const isRegister = true

  return (
    <div>
      <Header>
        <Modal open={open} onClose={() => setOpen(false)}>
          {isRegister ? <Login /> : <SignUp />}
        </Modal>
        {user ? (
          <Nav>
            <HeaderButton margin={'0 10px'}>Разместить объявление</HeaderButton>

            <Link to="profile">
              <HeaderButton>Личный кабинет</HeaderButton>
            </Link>
          </Nav>
        ) : (
          <Nav>
            <HeaderButton onClick={() => setOpen(true)}>
              Вход в личный кабинет
            </HeaderButton>
          </Nav>
        )}
      </Header>

      <Main>
        <Search />
        <Outlet />
      </Main>
    </div>
  )
}

export default RouteLayout
