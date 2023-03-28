import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { QuestionType } from "types/question";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://opentdb.com/api.php",
    }),
    endpoints(builder) {
        return {
            fetchQuestions: builder.query<{ results: QuestionType[] }, number>({
                query(amount = 10) {
                    return `?amount=${amount}`;
                },
            }),
        };
    },
});

export const { useFetchQuestionsQuery } = apiSlice;
