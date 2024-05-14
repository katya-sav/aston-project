import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  transformAnimeData,
  transformAnimePagination,
} from '../../store/transform';

import type {
  AnimeQuery,
  AnimeOneQuery,
  AnimeResponse,
  AnimeOneResponse,
} from '../../types';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/' }),
  endpoints: (builder) => ({
    getAnimeList: builder.query<AnimeQuery, number>({
      query: (page = 1) => ({
        url: 'anime',
        params: { page },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
        currentCache.pagination = newItems.pagination;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      transformResponse: (response: AnimeResponse) => ({
        data: response.data.map(transformAnimeData),
        pagination: transformAnimePagination(response.pagination),
      }),
    }),

    getAnimeCard: builder.query<AnimeOneQuery, number>({
      query: (id) => `anime/${id}`,
      transformResponse: (response: AnimeOneResponse) =>
        transformAnimeData(response.data),
    }),

    getAnimeSearch: builder.query<AnimeQuery, { q?: string; page: number }>({
      query: ({ q, page = 1 }) => ({
        url: 'anime',
        params: { q, page },
      }),
      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.q || '';
      },
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
        currentCache.pagination = newItems.pagination;
      },
      forceRefetch({ currentArg, previousArg }) {
        if (!currentArg || !previousArg) {
          return false;
        }

        return (
          currentArg?.page > previousArg?.page ||
          currentArg?.q !== previousArg?.q
        );
      },
      transformResponse: (response: AnimeResponse) => ({
        data: response.data.map(transformAnimeData),
        pagination: transformAnimePagination(response.pagination),
      }),
    }),
  }),
});

export const {
  useGetAnimeListQuery,
  useGetAnimeCardQuery,
  useGetAnimeSearchQuery,
  util: { resetApiState },
} = animeApi;
