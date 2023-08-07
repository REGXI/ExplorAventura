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

export const validateSearchPlaceData = ({
  destination,
  period,
  duration,
  travellers
}) => {
  if (destination === 'all') {
    return 'Please select a destination'
  }
  if (period === '') {
    return 'Please select a period'
  }
  if (duration === '') {
    return 'Please select a duration'
  }
  if (travellers === '') {
    return 'Please select a number of travellers'
  }
  return ''
}

export const selectSearchPlaces = (state) => state.searchPlace

export default searchPlaceSlice.reducer
