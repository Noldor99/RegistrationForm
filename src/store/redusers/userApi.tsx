import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPositions, IToken, IUser, IUsers } from '../../type/type'

export const userApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    prepareHeaders: (headers, { getState }) => {
      //@ts-ignore
      const { user: { token } } = getState()

      headers.set('Token', token ? token : '')
      return headers
    }
  }),
  tagTypes: ['User'],
  refetchOnFocus: false,
  endpoints: build => ({
    getToken: build.query<IToken, string>({
      query: () => ({
        url: '/token',
        method: 'GET'
      }),
    }),
    getPositions: build.query<IPositions, string>({
      query: () => ({
        url: '/positions',
        method: 'GET'
      })
    }),
    getUsers: build.query<IUsers, number>({
      query: (page) => ({
        url: `/users?page=${page}&count=6`,
        method: 'GET'
      }),

    }),
    getOneUsers: build.query<IUser, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET'
      })
    }),
    postUsers: build.mutation<any, any>({
      query: (user) => ({
        url: `/users`,
        method: 'POST',
        body: user
      }),

    }),
  })
})

export const {
  useLazyGetUsersQuery,
  useGetPositionsQuery,
  useGetTokenQuery,
  useLazyGetTokenQuery,
  usePostUsersMutation
} = userApi