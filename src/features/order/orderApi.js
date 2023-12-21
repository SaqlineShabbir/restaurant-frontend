import { apiSlice } from '../api/apiSlice';

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //from here
    getOrders: builder.query({
      query: () => '/menu',
      keepUnusedDataFor: 600,
    }),

    getOrdersByUserId: builder.query({
      query: (id) => `/order/${id}`,
      keepUnusedDataFor: 600,
      providesTags: ['Orders'],
    }),

    postOrder: builder.mutation({
      query: (data) => ({
        url: '/order',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Orders'],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Orders'],
    }),
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/order/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  usePostOrderMutation,
  useGetOrdersByUserIdQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
