import { apiSlice } from '../api/apiSlice'

export const addsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdds: builder.query({
      query: () => 'ads',
    }),
    getAddById: builder.query({
      query: (id) => `ads/${id}`,
    }),
    getUsers: builder.query({
      query: () => 'user/all',
    }),
    getUser: builder.query({
      query: () => '/user',
    }),
  }),
})

export const {
  useGetAllAddsQuery,
  useGetAddByIdQuery,
  useGetUsersQuery,
  useGetUserQuery,
} = addsApiSlice
