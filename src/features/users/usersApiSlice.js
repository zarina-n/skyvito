import { apiSlice } from '../api/apiSlice'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),
    getAllReviews: builder.query({
      query: () => 'comments',
    }),
    getUsers: builder.query({
      query: () => 'user/all',
    }),
    changeUser: builder.mutation({
      query: (credentials) => ({
        url: 'user',
        method: 'PATCH',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useChangeUserMutation,
} = usersApiSlice
