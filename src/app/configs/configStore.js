// *===================== 사용 안 함. 나중에 정리. =====================*

import { configureStore } from '@reduxjs/toolkit'
import auth from '../modules/authSlice'

const store = configureStore({
  reducer: {
    auth,
  },
})

export default store
