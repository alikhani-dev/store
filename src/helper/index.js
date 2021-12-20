const checkExist = (state, id) => {
	return !!state.find((item) => item.id === id)
}

const countProducts = (state, id) => {
	const index = state.findIndex((item) => item.id === id)
	if (index === -1) {
		return 0
	} else {
		return state[index].count
	}
}

const findProducts = (value, state) => {
	return state.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()))
}

export { checkExist, countProducts, findProducts }