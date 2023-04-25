import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://sea-turtle-app-o8dz8.ondigitalocean.app' }),
    tagTypes: ['Project', 'User'],
    endpoints: builder => ({})
})