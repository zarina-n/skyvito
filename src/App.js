import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'

// layouts
import RouteLayout from './layouts/RouteLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
