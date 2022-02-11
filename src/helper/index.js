export const checkExist = (state, id) => {
	return !!state.find((item) => item.id === id)
}

export const countProducts = (state, id) => {
	const index = state.findIndex((item) => item.id === id)
	if (index === -1) {
		return 0
	} else {
		return state[index].count
	}
}

export const findProducts = (value, state) => {
	return state.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()))
}

export const totalProducts = (arr) => {
	return arr.reduce((total, product) => total + product.price * product.count, 0)
}

export const addComma = (num) => {
    return num.toLocaleString()
}