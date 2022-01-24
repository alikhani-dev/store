import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV,
})

export default store
