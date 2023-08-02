import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navigationColor: 'light'
}

export const navigationColorSlice = createSlice({
  name: 'navigationColor',
  initialState,
  reducers: {
    setNavigationColor: (state, action) => {
      state.navigationColor = action.payload
    }
  }
})

export const { setNavigationColor } = navigationColorSlice.actions

export default navigationColorSlice.reducer

export const selectNavigationColor = (color) => (dispatch) => {
  dispatch(setNavigationColor(color))
}
