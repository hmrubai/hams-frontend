import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//We are section start
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_HOST_URL,

  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "auth/client-login",
        method: "POST",
        body,
      }),

    }),
    register: builder.mutation({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    getAllPost: builder.query({
      query: () => ({
        url: `/client/about-page`,
        method: "GET",
      }),
    }),
    getHomePages: builder.query({
      query: () => ({
        url: `/client/home-page`,
        method: "GET",
      }),
    }),
    getCommonApi: builder.query({
      query: () => ({
        url: `/client/common-info`,
        method: "GET",
      }),
    }),
    getNewsApi: builder.query({
      query: () => ({
        url: `/client/news-and-event-page`,
        method: "GET",
      }),
    }),
    getProductApi: builder.query({
      query: () => ({
        url: `/client/product-category-list`,
        method: "GET",
      }),
    }),
    getProductSubCategory: builder.query({
      query: (id) => ({
        url: `/client/product-sub-category-list/${id}`,
        method: "GET",
      }),
    }),
    getProductSubCategoryGallery: builder.query({
      query: (product_category_id) => ({
        url: `/client/product-list-by-sub-category-id/${product_category_id}`,
        method: "GET",
      }),
    }),
    getProductDetails: builder.query({
      query: (product_sub_category_id) => ({
        url: `/client/product-details/${product_sub_category_id}`,
        method: "GET",
      }),
    }),
    getClientProduct: builder.query({
      query: (id) => ({
        url: `/client/client-product-list/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetHomePagesQuery,
  useGetCommonApiQuery,
  useGetNewsApiQuery,
  useRegisterMutation,
  useLoginMutation,
  useGetProductApiQuery,
  useGetProductSubCategoryQuery,
  useGetProductSubCategoryGalleryQuery,
  useGetProductDetailsQuery,
  useGetClientProductQuery,
} = postApi;
