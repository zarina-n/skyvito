import { apiSlice } from '../api/apiSlice'

export const addsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdds: builder.query({
      query: () => 'ads',
    }),
    getMainImg: builder.query({
      query: (id) => `images/${id}`,
    }),
  }),
})

export const { useGetAllAddsQuery, useGetMainImgQuery } = addsApiSlice
