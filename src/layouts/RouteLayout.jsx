import { Link, Outlet } from 'react-router-dom'
import { Header, Nav, Main } from './RouteLayout.styled'
import { useDispatch, useSelector } from 'react-redux'
import { getModal, isModalOpen } from '../features/modal/modalSlice'

import Search from '../components/search/Search'
import HeaderButton from '../uiKit/buttons/HeaderButton'
import Modal from '../uiKit/modals/modal/Modal'

const RouteLayout = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth?.user)

  const isLoginOpen = useSelector((state) => state.modal.isOpen)
  const modalName = useSelector((state) => state.modal.modal)

  return (
    <div>
      <Header>
        {isLoginOpen && <Modal modal={modalName}></Modal>}

        {user ? (
          <Nav>
            <HeaderButton
              margin={'0 10px'}
              onClick={() => {
                dispatch(isModalOpen(true))
                dispatch(getModal('new-add'))
              }}
            >
              Разместить объявление
            </HeaderButton>

            <Link to="profile">
              <HeaderButton>Личный кабинет</HeaderButton>
            </Link>
          </Nav>
        ) : (
          <Nav>
            <HeaderButton
              onClick={() => {
                dispatch(isModalOpen(true))
                dispatch(getModal('login'))
              }}
            >
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
