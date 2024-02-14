import { apiSlice } from '../api/apiSlice';

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //from here

    getReviewsByMenuId: builder.query({
      query: (id) => `/review/${id}`,
      keepUnusedDataFor: 600,
      providesTags: ['reviews'],
    }),
    getReviews: builder.query({
      query: () => '/review',
      keepUnusedDataFor: 600,
    }),
    postReview: builder.mutation({
      query: (data) => ({
        url: '/review',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useGetReviewsByMenuIdQuery,
  usePostReviewMutation,
} = reviewApi;
