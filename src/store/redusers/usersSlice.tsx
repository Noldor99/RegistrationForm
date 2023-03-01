import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../type/type";
import { userApi } from "./userApi";

interface initialStateProps {
  users: IUser[] | any,
  totalPages: number,
  token: string,
  success: boolean
}

const initialState: initialStateProps = {
  users: [],
  totalPages: 1,
  token: '',
  success: false
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addMatcher(userApi.endpoints.getUsers.matchFulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload.users];
        const sort = 'registration_timestamp'
        state.users = state.users.sort((a: any, b: any) => (a[sort] > b[sort]) ? -1 : 1)
        state.totalPages = payload.total_pages;
      })
      .addMatcher(userApi.endpoints.getToken.matchFulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addMatcher(userApi.endpoints.postUsers.matchFulfilled, (state, { payload }) => {
        state.success = payload.success
      })
  },
})

export const {
} = userSlice.actions
export const userReducer = userSlice.reducer  