import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducerDetails } from './detailsReducer'
import { reducerData } from './photoReducer'

export const store = configureStore({
  reducer: {
    data: reducerData,
    details: reducerDetails,
  },
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== 'production',
})
