import { apiSlice } from '../../api/ApiSlice';
import { ISetting } from './ISetting';

export const settingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSettings: builder.query<ISetting[], void>({
      query: () => '/settings',
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetSettingsQuery } = settingsApiSlice;
