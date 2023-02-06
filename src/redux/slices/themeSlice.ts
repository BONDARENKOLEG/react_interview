import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'

interface themeState {
  theme: string
}

const initialState: themeState = {
  theme: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, actions) => {
      state.theme = actions.payload
    },

  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
export const selectTheme = (state: RootState) => state.theme