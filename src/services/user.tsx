import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse, IRepos, ParamsQuery } from "../models/models";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<ServerResponse, ParamsQuery>({
      query: (params: ParamsQuery) => ({
        url: `search/users`,
        params: {
          q: params.q,
          per_page: params.per_page,
          page: params.page,
          sort: "repositories",
          order: params.order,
        },
      }),
    }),
    getUserRepos: builder.query<IRepos[], string>({
      query: (username: string) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserReposQuery } = usersApi;
