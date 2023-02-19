import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import { userReducer } from './redusers/usersSlice'
import { userApi } from './redusers/userApi'
 

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof store.getState>