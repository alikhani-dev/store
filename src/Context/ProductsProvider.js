import { createContext, useReducer, useContext, useLayoutEffect } from 'react'
import { getProducts } from '../service'

const productsContext = createContext()
const productsDispatch = createContext()

export const useProductsDispatch = () => {
	const context = useContext(productsDispatch)

	if (!context) {
		throw new Error('productsDispatch must be used with a Provider')
	}

	return context
}

export const useProducts = () => {
	const context = useContext(productsContext)

	if (!context) {
		throw new Error('productsContext must be used with a Provider')
	}

	return context
}

const types = {
	SUCCESS_REQUEST_PRODUCTS: 'SUCCESS_REQUEST_PRODUCTS',
	FAILED_REQUEST_PRODUCTS: 'FAILED_REQUEST_PRODUCTS',
	PENDING_REQUEST_PRODUCTS: 'PENDING_REQUEST_PRODUCTS',
}

const initialState = {
	loading: 'idle',
	products: [],
	isError: '',
}

const reducer = (state, action) => {
	switch (action.type) {
		case types.PENDING_REQUEST_PRODUCTS:
			return { ...state, loading: 'pending', products: [], isError: '' }
		case types.SUCCESS_REQUEST_PRODUCTS:
			return { ...state, loading: 'success', products: action.payload, isError: '' }
		case types.FAILED_REQUEST_PRODUCTS:
			return { ...state, loading: 'error', products: [], isError: action.payload }
		default:
			throw new Error(`Unknown action type : ${action.type}`)
	}
}

const filedRequest = (payload) => ({ type: types.FAILED_REQUEST_PRODUCTS, payload })
const successRequest = (payload) => ({ type: types.SUCCESS_REQUEST_PRODUCTS, payload })
const pendingRequest = () => ({ type: types.PENDING_REQUEST_PRODUCTS })

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
    
	useLayoutEffect(() => {
        dispatch(pendingRequest())
		getProducts()
            .then((response) => dispatch(successRequest(response)))
		    .catch((error) => dispatch(filedRequest(error)))
	}, [])

	return (
		<productsContext.Provider value={state}>
			<productsDispatch.Provider value={dispatch}>{children}</productsDispatch.Provider>
		</productsContext.Provider>
	)
}
