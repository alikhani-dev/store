import { createContext, useReducer, useContext, useLayoutEffect } from 'react'
import { get } from '../service'

const StateContext = createContext()
const DispatcherContext = createContext()

export const useDispatch = () => {
	const context = useContext(DispatcherContext)

	if (!context) {
		throw new Error('DispatcherContext must be used with a Provider')
	}

	return context
}

export const useProducts = () => {
	const context = useContext(StateContext)

	if (!context) {
		throw new Error('StateContext must be used with a Provider')
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

const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const newDispatch = value(dispatch)

	useLayoutEffect(() => {
		get(`https://fakestoreapi.com/products`)
			.then(({ data }) => newDispatch.successRequestProducts(data))
			.catch((e) => newDispatch.filedRequestProducts(e))
	}, [])

	return (
		<StateContext.Provider value={state}>
			<DispatcherContext.Provider value={newDispatch}>{children}</DispatcherContext.Provider>
		</StateContext.Provider>
	)
}

export default ProductsProvider
