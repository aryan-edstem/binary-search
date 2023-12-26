import { configureStore } from '@reduxjs/toolkit'
import binaryReducer from './redux/BinarySlice'

export const store = configureStore({
  reducer: {
    binary: binaryReducer
  },
})