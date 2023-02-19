import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const initialState = {
  users: [],
  totalPages: 1,
  token: ''
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{ 

  },
  extraReducers(builder) {
    builder
      .addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload.users];
        const sort = 'registration_timestamp'
        state.users = state.users.sort((a, b) => (a[sort] > b[sort]) ? -1 : 1)
        state.totalPages = payload.total_pages;
      })
      .addMatcher(userApi.endpoints.getToken.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
  },
})

export const {
} = userSlice.actions
export const userReducer = userSlice.reducer  