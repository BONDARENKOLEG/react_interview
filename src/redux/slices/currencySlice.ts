import type { RootState } from '../store'
import { createSlice } from '@reduxjs/toolkit'

interface currencyState {
  usd: string
  eur: string

}

const initialState: currencyState = {
  usd: '--',
  eur: '--',
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