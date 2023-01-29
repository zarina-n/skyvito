import { Link, Outlet } from 'react-router-dom'
import { Header, Nav, Main } from './RouteLayout.styled'
import Search from '../components/search/Search'
import HeaderButton from '../uiKit/buttons/HeaderButton'

const RouteLayout = () => {
  const user = true
  return (
    <div>
      <Header>
        {user ? (
          <Nav>
            <Link to="place-add">
              <HeaderButton margin={'0 10px'}>
                Разместить объявление
              </HeaderButton>
            </Link>
            <Link to="profile">
              <HeaderButton>Личный кабинет</HeaderButton>
            </Link>
          </Nav>
        ) : (
          <Nav>
            <Link to="profile">
              <HeaderButton>Вход в личный кабинет</HeaderButton>
            </Link>
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
