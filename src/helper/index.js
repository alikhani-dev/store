export const checkExist = (state, id) => {
	return state.findIndex((item) => item.id === id) === -1 ? false : true
}
