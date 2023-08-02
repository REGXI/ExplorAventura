import { configureStore } from '@reduxjs/toolkit'
import navigationColorReducer from './features/navigationColorSlice'

export const store = configureStore({
  reducer: {
    navigationColor: navigationColorReducer
  }
})
