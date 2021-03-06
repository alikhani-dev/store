import { createContext, useReducer, useContext } from 'react'
import { totalProducts } from '../helper'

const CardContext = createContext()
const CardDispatch = createContext()

export const useCart = () => {
	const context = useContext(CardContext)

	if (!context) {
		throw new Error('useCart must be used with a Provider')
	}

	return context
}

export const useCartDispatch = () => {
	const context = useContext(CardDispatch)

	if (!context) {
		throw new Error('CardDispatch must be used with a Provider')
	}

	return context
}

const types = {
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
	switch (action.type) {
		case types.INCREMENT_PRODUCT: {
			const id = action.payload
			const index = state.selectedItem.findIndex((item) => item.id === id)
			let newSelected = [...state.selectedItem]
			newSelected[index] = { ...newSelected[index], count: newSelected[index].count + 1 }
			return { ...state, selectedItem: newSelected, total: totalProducts(newSelected) }
		}

		case types.DECREMENT_PRODUCT: {
			const id = action.payload
			const index = state.selectedItem.findIndex((item) => item.id === id)
			let newSelected = [...state.selectedItem]
			newSelected[index] = { ...newSelected[index], count: newSelected[index].count - 1 }
			return { ...state, selectedItem: newSelected, total: totalProducts(newSelected) }
		}

		case types.ADD_PRODUCT: {
			const product = action.payload
			const newSelected = [...state.selectedItem, { ...product, count: 1 }]
			return { ...state, selectedItem: newSelected, total: totalProducts(newSelected) }
		}

		case types.REMOVE_PRODUCT: {
			const { selectedItem } = state
			const id = action.payload
			const filterSelectedItem = selectedItem.filter((item) => item.id !== id)
			return { ...state, selectedItem: [...filterSelectedItem], total: totalProducts(filterSelectedItem) }
		}

		case types.PAYOFF: {
			return { ...initialState, pay: true }
		}

		case types.CLEAR: {
			return { ...initialState }
		}

		default:
			throw new Error(`Unknown action type : ${action.type}`)
	}
}

// Action reducer
export const addProduct = (payload) => ({ type: types.ADD_PRODUCT, payload })
export const removeProduct = (payload) => ({ type: types.REMOVE_PRODUCT, payload })
export const incrementProduct = (payload) => ({ type: types.INCREMENT_PRODUCT, payload })
export const decrementProduct = (payload) => ({ type: types.DECREMENT_PRODUCT, payload })
export const clearProduct = () => ({ type: types.CLEAR })
export const payOff = () => ({ type: types.PAYOFF })

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<CardContext.Provider value={state}>
			<CardDispatch.Provider value={dispatch}>{children}</CardDispatch.Provider>
		</CardContext.Provider>
	)
}
