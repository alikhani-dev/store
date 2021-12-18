import { createContext, useReducer, useContext } from 'react'

const CartState = createContext()
const CartDispatch = createContext()

export const useCartDispatch = () => {
	const context = useContext(CartDispatch)

	if (!context) {
		throw new Error('CartDispatch must be used with a Provider')
	}

	return context
}

export const useCart = () => {
	const context = useContext(CartState)

	if (!context) {
		throw new Error('CartState must be used with a Provider')
	}

	return context
}

const actions = {
	ADD_PRODUCT: 'ADD_PRODUCT',
	INCREMENT_PRODUCT: 'INCREMENT_PRODUCT',
	DECREMENT_PRODUCT: 'DECREMENT_PRODUCT',
	REMOVE_PRODUCT: 'REMOVE_PRODUCT',
	CLEAR: 'CLEAR',
	PAYOFF: 'PAYOFF',
}

const initialState = {
	total: 0,
	pay: false,
	selectedItem: [],
}

const totalProducts = (arr) => {
	return arr.reduce((total, product) => total + product.price * product.count, 0)
}

const reducer = (state, action) => {
	const { type } = action

	switch (type) {
		case actions.INCREMENT_PRODUCT: {
			const id = action.payload
			const index = state.selectedItem.findIndex((item) => item.id === id)
			let newSelected = [...state.selectedItem]
			newSelected[index] = { ...newSelected[index], count: newSelected[index].count + 1 }
			return { ...state, selectedItem: newSelected, total: totalProducts(newSelected) }
		}

		case actions.DECREMENT_PRODUCT: {
			const id = action.payload
			const index = state.selectedItem.findIndex((item) => item.id === id)
			let newSelected = [...state.selectedItem]
			newSelected[index] = { ...newSelected[index], count: newSelected[index].count - 1 }
			return { ...state, selectedItem: newSelected, total: totalProducts(newSelected) }
		}

		case actions.ADD_PRODUCT: {
			const product = action.payload
			const newSelected = [...state.selectedItem, { ...product, count: 1 }]
			return { ...state, selectedItem: newSelected, total: totalProducts(newSelected) }
		}

		case actions.REMOVE_PRODUCT: {
			const { selectedItem } = state
			const id = action.payload
			const filterSelectedItem = selectedItem.filter((item) => item.id !== id)
			return { ...state, selectedItem: [...filterSelectedItem], total: totalProducts(filterSelectedItem) }
		}

		case actions.PAYOFF: {
			return { ...initialState, pay: true }
		}

		case actions.CLEAR: {
			return { ...initialState }
		}

		default:
			throw new Error(`type reducer invalid : ${type}`)
	}
}

const value = (dispatch) => {
	return {
		addProduct: (payload) => dispatch({ type: actions.ADD_PRODUCT, payload }),
		removeProduct: (payload) => dispatch({ type: actions.REMOVE_PRODUCT, payload }),
		incrementProduct: (payload) => dispatch({ type: actions.INCREMENT_PRODUCT, payload }),
		decrementProduct: (payload) => dispatch({ type: actions.DECREMENT_PRODUCT, payload }),
		clearProduct: () => dispatch({ type: actions.CLEAR }),
		payOff: () => dispatch({ type: actions.PAYOFF }),
	}
}

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const newDispatch = value(dispatch)

	return (
		<CartState.Provider value={state}>
			<CartDispatch.Provider value={newDispatch}>{children}</CartDispatch.Provider>
		</CartState.Provider>
	)
}
