import { apiSlice } from "../api/apiSlice";

export const menuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //from here
    getMenus: builder.query({
      query: () => "/menu",
      providesTags: ["Menus"],
    }),

    getMenuById: builder.query({
      query: (id) => `/menu/${id}`,
      providesTags: ["Menu"],
    }),

    postMenu: builder.mutation({
      query: (formData) => ({
        url: "/menu",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Menus"],
    }),

    deleteMenu: builder.mutation({
      query: (id) => ({
        url: `/menu/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Menus"],
    }),
    updateMenu: builder.mutation({
      query: ({ id, ...formData }) => ({
        url: `/menu/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Menu", "Menus"],
    }),
  }),
});

export const {
  useGetMenusQuery,
  useGetMenuByIdQuery,
  usePostMenuMutation,
  useDeleteMenuMutation,
  useUpdateMenuMutation,
} = menuApi;
