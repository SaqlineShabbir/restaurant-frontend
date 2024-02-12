import { apiSlice } from '../api/apiSlice';

export const menuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //from here
    getMenus: builder.query({
      query: () => '/menu',
      providesTags: ['Menus'],
    }),

    getMenuById: builder.query({
      query: (id) => `/menu/${id}`,
    }),

    postMenu: builder.mutation({
      query: (formData) => ({
        url: '/menu',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Menus'],
    }),

    deleteMenu: builder.mutation({
      query: (id) => ({
        url: `/menu/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Menus'],
    }),

  }),
});

export const { useGetMenusQuery, useGetMenuByIdQuery, usePostMenuMutation, useDeleteMenuMutation } = menuApi;
