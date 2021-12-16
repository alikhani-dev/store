import { createContext, useReducer, useContext } from 'react'

const CardState = createContext()
const CardDispatch = createContext()

export const useCardDispatch = () => {
	const context = useContext(CardDispatch)

	if (!context) {
		throw new Error('CardDispatch must be used with a Provider')
	}

	return context
}

export const useCard = () => {
	const context = useContext(CardState)

	if (!context) {
		throw new Error('CardState must be used with a Provider')
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

const reducer = (state, action) => {
	const { type } = action

	switch (type) {
		//!Not best way
		case actions.INCREMENT_PRODUCT: {
			const id = action.payload
			const findIndex = state.selectedItem.findIndex((item) => item.id === id)
			const filterProducts = state.selectedItem.filter((item) => item.id !== id)
			const newProduct = state.selectedItem[findIndex]
			filterProducts.push({ ...newProduct, count: newProduct.count + 1 })
			return { ...state, selectedItem: [...filterProducts] }
		}
		//!Not best way
		case actions.DECREMENT_PRODUCT: {
			const id = action.payload
			const findIndex = state.selectedItem.findIndex((item) => item.id === id)
			const filterProducts = state.selectedItem.filter((item) => item.id !== id)
			const newProduct = state.selectedItem[findIndex]
			filterProducts.push({ ...newProduct, count: newProduct.count - 1 })
			return { ...state, selectedItem: [...filterProducts] }
		}

		case actions.ADD_PRODUCT: {
			const product = action.payload
			return { ...state, selectedItem: [...state.selectedItem, { ...product, count: 1 }] }
		}

		case actions.REMOVE_PRODUCT: {
			const { selectedItem } = state
			const id = action.payload
			const filterSelectedItem = selectedItem.filter((item) => item.id !== id)
			return { ...state, selectedItem: [...filterSelectedItem] }
		}

		case actions.PAYOFF: {
			return { ...state, pay: true }
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

export const CardProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<CardState.Provider value={state}>
			<CardDispatch.Provider value={value(dispatch)}>{children}</CardDispatch.Provider>
		</CardState.Provider>
	)
}
