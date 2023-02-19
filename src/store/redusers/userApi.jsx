import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
 
export const userApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    prepareHeaders: (headers, {getState}) => {
      const {user: {token}} = getState()
      
      headers.set('Token', token ? token : '')
      return headers
    }
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    getToken:build.query({
      query: () => ({
        url: '/token',
        method: 'GET'
      }),
    }),
    getPositions:build.query({
      query: () => ({
        url: '/positions',
        method: 'GET'
      })
    }),
    getUsers:build.query({
      query: (page) => ({
        url: `/users?page=${page}&count=6`,
        method: 'GET'
      })
    }),
    getOneUsers:build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'GET'
      })
    }),
    postUsers:build.mutation({
      query: (user) => ({
        url: `/users`,
        method: 'POST',
        body: user
      })
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