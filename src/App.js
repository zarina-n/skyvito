import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import AddAbout from './pages/addAbout/AddAbout'
import NotFound from './pages/notFound/NotFound'
import Seller from './pages/seller/Seller'
import RouteLayout from './layouts/RouteLayout'

import RefreshToken from './RefreshToken'

import { Suspense } from 'react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="add/:id" element={<AddAbout />} />
      <Route path="seller/:id" element={<Seller />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  RefreshToken()
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
