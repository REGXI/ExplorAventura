import { configureStore } from '@reduxjs/toolkit'
import navigationColorReducer from './features/navigationColorSlice'
import searchPlaceSlice from './features/searchPlaceSlice'

export const store = configureStore({
  reducer: {
    navigationColor: navigationColorReducer,
    searchPlace: searchPlaceSlice
  }
})
