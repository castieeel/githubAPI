import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type IRepos, type ServerResponse } from '../models/models'

export const githubApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getUsers: builder.query < ServerResponse, { user: string, pageNum: number, sortQry: string, perPage: number } >({
      query: (param) => {
        const { user, pageNum, sortQry, perPage } = param
        return {
          url: '/search/users',
          params: {
            q: user,
            sort: 'repositories',
            order: sortQry,
            per_page: perPage,
            page: pageNum
          }
        }
      }
    }),
    getRepos: builder.query < IRepos[], string >({
      query: (username: string) => ({
        url: `users/${username}/repos`
      })
    })
  })
})

export const { useGetUsersQuery, useLazyGetReposQuery } = githubApi
