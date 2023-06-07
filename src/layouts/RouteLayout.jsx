import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { Header, Nav, Main } from './RouteLayout.styled'
import { useDispatch, useSelector } from 'react-redux'
import { getModal, isModalOpen } from '../features/modal/modalSlice'

import Search from '../components/search/Search'
import HeaderButton from '../uiKit/buttons/HeaderButton'
import Modal from '../uiKit/modals/modal/Modal'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const RouteLayout = () => {
  const { i18n, t } = useTranslation(['home'])

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth?.user)

  const isLoginOpen = useSelector((state) => state.modal.isOpen)
  const modalName = useSelector((state) => state.modal.modal)

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en')
    }
  }, [])

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div>
      <Header>
        {isLoginOpen && <Modal modal={modalName}></Modal>}

        <Nav>
          {localStorage.getItem('i18nextLng') === 'en' ? (
            <HeaderButton
              margin={'0 10px'}
              onClick={() => {
                handleLanguageChange('ru')
              }}
            >
              {t('lng')}
            </HeaderButton>
          ) : (
            <HeaderButton
              margin={'0 10px'}
              onClick={() => {
                handleLanguageChange('en')
              }}
            >
              {t('lng')}
            </HeaderButton>
          )}

          {user ? (
            <>
              <HeaderButton
                margin={'0 10px'}
                onClick={() => {
                  dispatch(isModalOpen(true))
                  dispatch(getModal('new-add'))
                }}
              >
                {t('placeAnAdButton')}
              </HeaderButton>
              <Link to="profile">
                <HeaderButton>{t('profileButton')}</HeaderButton>
              </Link>{' '}
            </>
          ) : (
            <>
              <HeaderButton
                onClick={() => {
                  dispatch(isModalOpen(true))
                  dispatch(getModal('login'))
                }}
              >
                {t('signIn')}
              </HeaderButton>
            </>
          )}
        </Nav>
      </Header>

      <Main>
        <Search />
        <Outlet />
      </Main>
    </div>
  )
}

export default RouteLayout
