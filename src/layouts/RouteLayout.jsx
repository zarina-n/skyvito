import { Link, Outlet } from 'react-router-dom'
import { Header, Nav, Main } from './RouteLayout.styled'
import { useState } from 'react'
import Search from '../components/search/Search'
import HeaderButton from '../uiKit/buttons/HeaderButton'
import Modal from '../uiKit/modals/modal/Modal'
import Login from '../uiKit/modals/auth/Login'
import SignUp from '../uiKit/modals/auth/SignUp'
import NewAdd from '../uiKit/modals/addEditAdd/NewAdd'

const RouteLayout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isNewAddOpen, setIsNewAddOpen] = useState(false)
  const user = true
  const isRegister = true

  return (
    <div>
      <Header>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {isRegister ? <Login /> : <SignUp />}
        </Modal>

        <Modal open={isNewAddOpen} onClose={() => setIsNewAddOpen(false)}>
          <NewAdd />
        </Modal>
        {user ? (
          <Nav>
            <HeaderButton
              margin={'0 10px'}
              onClick={() => setIsNewAddOpen(true)}
            >
              Разместить объявление
            </HeaderButton>

            <Link to="profile">
              <HeaderButton>Личный кабинет</HeaderButton>
            </Link>
          </Nav>
        ) : (
          <Nav>
            <HeaderButton onClick={() => setIsOpen(true)}>
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
