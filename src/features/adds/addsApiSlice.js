import { apiSlice } from '../api/apiSlice'

export const addsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdds: builder.query({
      query: () => 'ads',
      providesTags: ['Adds'],
    }),
    getAddById: builder.query({
      query: (id) => `ads/${id}`,
      providesTags: ['Adds'],
    }),

    getCurrentUserAdds: builder.query({
      query: () => 'adds/me',
      providesTags: ['Adds'],
    }),
  }),
})

export const { useGetAllAddsQuery, useGetAddByIdQuery } = addsApiSlice
