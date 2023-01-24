import { NavLink, Outlet } from 'react-router-dom'
import { Header, Nav, Main } from './RouteLayout.styled'
import Button from '../uiKit/buttons/Button'
import Search from '../components/search/Search'

const RouteLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <Button hoverColor="rgba(255, 255, 255, 0.15)" padding={'8px 24px'}>
            <NavLink to="profile">Личный кабинет</NavLink>
          </Button>
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
