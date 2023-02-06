import themeReducer from './slices/themeSlice'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const rootReducer = combineReducers({
  theme: themeReducer,

})

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

