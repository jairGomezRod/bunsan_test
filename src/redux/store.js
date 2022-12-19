import { configureStore } from '@reduxjs/toolkit'
import userReducer from './states/user.state'
export default configureStore({
  reducer: {
    user: userReducer,
  },
})