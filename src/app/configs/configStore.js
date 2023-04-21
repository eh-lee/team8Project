import { configureStore } from '@reduxjs/toolkit'
import writeReducer from '../modules/writeSlice'
import detailSlice from '../modules/detailSlice'

const store = configureStore({
  reducer: {
    write: writeReducer,
    detail: detailSlice,
  },
})

export default store
