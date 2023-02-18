import { apiSlice } from '../api/apiSlice'

export const addsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdds: builder.query({
      query: () => 'ads',
    }),
    getAddById: builder.query({
      query: (id) => `ads/${id}`,
    }),

    getCurrentUserAdds: builder.query({
      query: () => 'adds/me',
    }),
  }),
})

export const { useGetAllAddsQuery, useGetAddByIdQuery } = addsApiSlice
