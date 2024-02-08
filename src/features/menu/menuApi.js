import { apiSlice } from '../api/apiSlice';

export const menuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //from here
    getMenus: builder.query({
      query: () => '/menu',
    }),

    getMenuById: builder.query({
      query: (id) => `/menu/${id}`,
    }),

    postMenu: builder.mutation({
      query: (data) => ({
        url: '/menu',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          //   dispatch(
          //     userLoggedIn({
          //       token: result.data.token,
          //       user: result?.data.data,
          //     })
          //   );
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetMenusQuery, useGetMenuByIdQuery } = menuApi;
