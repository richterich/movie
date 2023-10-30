import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {config} from './api-config';

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  NonNullable<unknown>,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  prepareHeaders: (headers) => {
    return headers;
  },
});
