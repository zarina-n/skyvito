import { NavLink, Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="profile">Личный кабинет</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RouteLayout
