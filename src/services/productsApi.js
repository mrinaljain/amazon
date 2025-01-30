import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "produtcsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "products" }),
    addProducts: builder.mutation({
      query: (newProduct) => ({
        url: "products/add",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductsMutation } = productsApi;
