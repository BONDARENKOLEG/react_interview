import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'

interface currencyState {
  usd: number
  eur: number
}

const initialState: currencyState = {
  usd: 37.4,
  eur: 40.2,
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setUsd: (state, actions) => {
      state.usd = actions.payload
    },
    setEur: (state, actions) => {
      state.eur = actions.payload
    },

  },
})

export const { setUsd, setEur } = currencySlice.actions
export default currencySlice.reducer
export const currencyRate = (state: RootState) => state.currency