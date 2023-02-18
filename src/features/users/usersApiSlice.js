import { apiSlice } from '../api/apiSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => 'user',
    }),
    getAllReviews: builder.query({
      query: () => 'comments',
    }),
    getUsers: builder.query({
      query: () => 'user/all',
    }),
  }),
})

export const { useGetCurrentUserQuery, useGetUsersQuery } = usersApiSlice
