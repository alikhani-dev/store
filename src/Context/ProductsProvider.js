import { createContext, useReducer, useContext, useLayoutEffect } from 'react'
import { get } from '../Service'

const dataContext = createContext()
const dataDispatch = createContext()

export const useDataDispatch = () => {
	const context = useContext(dataDispatch)

	if (!context) {
		throw new Error('dataDispatch must be used with a Provider')
	}

	return context
}

export const useData = () => {
	const context = useContext(dataContext)

    if (!context) {
		throw new Error('dataContext must be used with a Provider')
	}

	return context
}
//--- Reducer
const actions = {
	SUCCESS_REQUEST_PRODUCTS: 'SUCCESS_REQUEST_PRODUCTS',
	FAILED_REQUEST_PRODUCTS: 'FAILED_REQUEST_PRODUCTS',
}

const initialState = {
	loading: true,
	products: null,
	isError: '',
}

const value = (dispatch) => {
	return {
		filedRequestProducts: (payload) => dispatch({ type: actions.FAILED_REQUEST_PRODUCTS, payload }),
		successRequestProducts: (payload) => dispatch({ type: actions.SUCCESS_REQUEST_PRODUCTS, payload }),
	}
}

const reducer = (state, action) => {
	const { type } = action
	switch (type) {
		case actions.SUCCESS_REQUEST_PRODUCTS:
			return { ...state, loading: false, products: action.payload, isError: '' }
		case actions.FAILED_REQUEST_PRODUCTS:
			return { ...state, loading: false, products: [], isError: action.payload }
		default:
			throw new Error(`type reducer invalid : ${type}`)
	}
}

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const newDispatch = value(dispatch)

	useLayoutEffect(() => {
		get(`v1/f81a2815-e9bd-4fc8-83d7-bfe5f9411145`)
			.then(({ data }) => newDispatch.successRequestProducts(data))
			.catch((e) => newDispatch.filedRequestProducts(e))
	}, [])

	return (
		<dataContext.Provider value={state}>
			<dataDispatch.Provider value={newDispatch}>{children}</dataDispatch.Provider>
		</dataContext.Provider>
	)
}
