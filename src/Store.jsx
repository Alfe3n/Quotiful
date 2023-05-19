import { configureStore } from '@reduxjs/toolkit'
import bookmarkReducer from './Slice'
export const store = configureStore({
  reducer: {
    bookmarklist: bookmarkReducer
  }
})
