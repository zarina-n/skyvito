import { Link, Outlet } from 'react-router-dom'
import { Header, Nav, Main } from './RouteLayout.styled'
import Button from '../uiKit/buttons/Button'
import Search from '../components/search/Search'

const RouteLayout = () => {
  const user = true
  return (
    <div>
      <Header>
        {user ? (
          <Nav>
            <Link to="place-add">
              <Button
                hoverColor="rgba(255, 255, 255, 0.15)"
                padding={'8px 24px'}
                margin={'0 10px'}
              >
                Разместить объявление
              </Button>
            </Link>
            <Link to="profile">
              <Button
                hoverColor="rgba(255, 255, 255, 0.15)"
                padding={'8px 24px'}
              >
                Личный кабинет
              </Button>
            </Link>
          </Nav>
        ) : (
          <Nav>
            <Link to="profile">
              <Button
                hoverColor="rgba(255, 255, 255, 0.15)"
                padding={'8px 24px'}
              >
                Вход в личный кабинет
              </Button>
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
