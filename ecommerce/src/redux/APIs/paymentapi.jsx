// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/payment' }),
    tagTypes: ['Payment'],
    endpoints: (builder) => ({
        createPayment: builder.mutation({
            query: ({ body }) => ({
                url: "create",
                method: "POST",
                body: body,
            }),
            invalidatesTags: ["Payment"],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreatePaymentMutation } = paymentApi;