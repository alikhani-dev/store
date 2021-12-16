export const checkExist = (state, id) => {
	return !!state.find((item) => item.id === id)
}
