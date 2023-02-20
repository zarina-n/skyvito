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
      query: () => 'ads/me',
      providesTags: ['Adds'],
    }),
    createAdd: builder.mutation({
      query: (data) => ({
        url: `ads${data.query}`,
        method: 'POST',
        body: data.formData,
      }),
      invalidatesTags: ['Adds'],
    }),
    createAddWithNoImages: builder.mutation({
      query: (data) => ({
        url: `ads${data.query}`,
        method: 'POST',
      }),
      invalidatesTags: ['Adds'],
    }),
    deleteAdd: builder.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Adds'],
    }),
    changeAdd: builder.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Adds'],
    }),
    deleteAddImage: builder.mutation({
      query: ({ id, query }) => ({
        url: `ads/${id}/image/${query}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Adds'],
    }),
    uploadImageToAdd: builder.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adds'],
    }),
  }),
})

export const {
  useGetAllAddsQuery,
  useGetAddByIdQuery,
  useCreateAddMutation,
  useCreateAddWithNoImagesMutation,
  useGetCurrentUserAddsQuery,
  useDeleteAddMutation,
  useChangeAddMutation,
  useDeleteAddImageMutation,
  useUploadImageToAddMutation,
} = addsApiSlice
