import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import AddAbout from './pages/addAbout/AddAbout'
import NotFound from './pages/notFound/NotFound'
import Seller from './pages/seller/Seller'

// layouts
import RouteLayout from './layouts/RouteLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="add/:id" element={<AddAbout />} />
      <Route path="seller" element={<Seller />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
