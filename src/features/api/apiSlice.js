import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccessToken, logUserOut } from '../auth/authSlice'

export const BASE_URL = 'http://localhost:8090/'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.access
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (
    result?.error?.originalStatus === 403 ||
    result?.error?.originalStatus === 401
  ) {
    console.log('sending refresh token')

    const refreshResult = await baseQuery('/auth/login', api, extraOptions)

    console.log(refreshResult)

    if (refreshResult?.data) {
      api.dispatch(setAccessToken(refreshResult.access_token))

      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logUserOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
})
