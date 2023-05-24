import { configureStore } from '@reduxjs/toolkit'
import {modalSlice} from './ReduxReducers'

export default configureStore({
  reducer: {
    modal: modalSlice.reducer,
  }
})