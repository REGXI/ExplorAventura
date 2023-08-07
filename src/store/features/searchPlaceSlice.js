import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  destination: 'all',
  period: '',
  duration: '1',
  travellers: ''
}

export const searchPlaceSlice = createSlice({
  name: 'searchPlace',
  initialState,
  reducers: {
    setSearchPlaces: (state, action) => {
      state.destination = action.payload.destination
      state.period = action.payload.period
      state.duration = action.payload.duration
      state.travellers = action.payload.travellers
    }
  }
})

export const setSearchPlaceData =
  ({ destination, period, duration, travellers }) =>
  (dispatch) => {
    dispatch(
      searchPlaceSlice.actions.setSearchPlaces({
        destination,
        period,
        duration,
        travellers
      })
    )
  }

export const selectSearchPlaces = (state) => state.searchPlace

export default searchPlaceSlice.reducer
