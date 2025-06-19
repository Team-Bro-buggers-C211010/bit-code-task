import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/Auth/authSlice.js'
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})