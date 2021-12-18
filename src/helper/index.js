const checkExist = (state, id) => {
	return !!state.find((item) => item.id === id)
}

const countProduct = (state, id) => {
	const index = state.findIndex((item) => item.id === id)
	if (index === -1) {
		return 0
	} else {
		return state[index].count
	}
}

export { checkExist, countProduct }