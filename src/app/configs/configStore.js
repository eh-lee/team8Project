import { configureStore } from '@reduxjs/toolkit'
import writeReducer from '../modules/writeSlice'

const store = configureStore({
  reducer: {
    write: writeReducer,
  },
})

export default store
