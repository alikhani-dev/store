import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export default store
