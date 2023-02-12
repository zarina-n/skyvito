import { apiSlice } from '../api/apiSlice'

export const addsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdds: builder.query({
      query: () => '/ads',
    }),
  }),
})

export const { useGetAllAddsQuery } = addsApiSlice
