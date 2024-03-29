import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //register
    register: builder.mutation({
      query: (data) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: result.data.token,
              user: result.data.data,
            })
          );
          console.log('result from redux', result);
          dispatch(
            userLoggedIn({
              token: result.data.token,
              user: result?.data.data,
            })
          );
        } catch (error) { }
      },
    }),
    //login
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            'auth',
            JSON.stringify({
              token: result.data.token,
              user: result.data.data,
            })
          );

          dispatch(
            userLoggedIn({
              user: result?.data?.data,
              token: result?.data?.token,
            })
          );
        } catch (error) { }
      },
    }),
    makeAdmin: builder.mutation({
      query: (data) => ({
        url: '/make-admin',
        method: 'PATCH',
        body: data,
      }),


    }),

  }),
});

export const { useLoginMutation, useRegisterMutation, useMakeAdminMutation } = authApi;
