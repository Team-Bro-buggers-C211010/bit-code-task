import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/Auth/authSlice.js'
import roadmapReducer from '../features/Roadmaps/roadmapSlice.js'
import commentReducer from '../features/Comment/commentSlice.js'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    roadmap: roadmapReducer,
    comment: commentReducer,
  },
})