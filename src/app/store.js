import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import authReducer from '../features/auth/authSlice'
import addsReducer from '../features/adds/addsSlice'
import reviewReducer from '../features/reviews/reviewSlice'
import modalReducer from '../features/modal/modalSlice'
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    adds: addsReducer,
    reviews: reviewReducer,
    modal: modalReducer,
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})
