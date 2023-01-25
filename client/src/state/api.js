import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Regions",
    "Members",
    "Sales",
    "Admins",
    "Add Member"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getRegions: build.query({
      query: () => "client/regions",
      providesTags: ["Regions"],
    }),
    getMembers: build.query({
      query: () => "client/members",
      providesTags: ["Members"],
    }),
    // getTransactions: build.query({
    //   query: ({ page, pageSize, sort, search }) => ({
    //     url: "client/transactions",
    //     method: "GET",
    //     params: { page, pageSize, sort, search },
    //   }),
    //   providesTags: ["Transactions"],
    // }),
    // getGeography: build.query({
    //   query: () => "client/geography",
    //   providesTags: ["Geography"],
    // }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getAddMember: build.query({
      query: () => "management/add-member",
      providesTags: ["Add Member"],
    }),
    // getUserPerformance: build.query({
    //   query: (id) => `management/performance/${id}`,
    //   providesTags: ["Performance"],
    // }),
    // getDashboard: build.query({
    //   query: () => "general/dashboard",
    //   providesTags: ["Dashboard"],
    // }),
  }),
})


export const {
  useGetUserQuery,
  useGetRegionsQuery,
  useGetMembersQuery,
  // useGetTransactionsQuery,
  // useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetAddMemberQuery,
  // useGetUserPerformanceQuery,
  // useGetDashboardQuery,
} = api;