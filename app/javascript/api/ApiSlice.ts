import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // The name of the reducer in the store is optional if the name is the same as the name of the slice
  reducerPath: 'api', // this is the name of the reducer in the store (state.api)
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (_builder) => ({}),
});
