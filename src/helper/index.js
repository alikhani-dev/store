export const checkExist = (arr, id) => {
	return Object.keys(arr).some((productId) => Number(productId) === id)
}

export const countProducts = (arr, id) => {
	const status = Object.keys(arr).some((productId) => Number(productId) === id)
	return status ? arr[id].count : 0
}

export const findProducts = (value, state) => {
	return state.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()))
}

export const totalProducts = (obj) => {
	return Object.values(obj).reduce((total, product) => total + product.price * product.count, 0)
}

export const addCommasToNumber = (number) => {
	return new Intl.NumberFormat('en-US').format(number)
}

export const compareLower = (a, b) => {
	if (a.name < b.name) {
		return -1
	}
	if (a.name > b.name) {
		return 1
	}
	return 0
}

export const compareUpper = (a, b) => {
	if (a.name > b.name) {
		return -1
	}
	if (a.name < b.name) {
		return 1
	}
	return 0
}