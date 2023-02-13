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
  }),
})

export const { useGetAllAddsQuery, useGetAddByIdQuery, useGetUsersQuery } =
  addsApiSlice
