import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restaurant-backend-rpyy.onrender.com/api",
    // https://restaurant-backend-rpyy.onrender.com//api//
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.token;
      //if token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Orders", "Reviews", "Menus"],
  endpoints: (builder) => ({
    // all endpoints here
  }),
});
