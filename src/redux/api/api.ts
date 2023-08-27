import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    // getSingleNews: builder.query({
    //   query: (id) => `/news/${id}`,
    // }),
  }),
});

export const { useGetAllProductsQuery } = apiSlice;
