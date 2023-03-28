import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { QuestionType } from '@/types/question';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com/api.php',
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<QuestionType[], number | void>({
        query(amount = 10) {
          return `?amount=${amount}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;