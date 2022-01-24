import auth from './authorizationSlice'
import products from './productSlice'
import filter from './filterSlice'
import cart from './cartSlice'

const reducer = {
	products,
	filter,
	auth,
	cart,
}

export default reducer
