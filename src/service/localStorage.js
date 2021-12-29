const createItem = (id, data) => {
	localStorage.setItem(id, JSON.stringify(data))
}

const getItem = (id) => {
	const data = localStorage.getItem(id)
	return JSON.stringify(data)
}

const removeItem = (id) => {
	localStorage.removeItem(id)
}

const generateID = () => {
	let index = 0
	while (index) {
		index++
		return getItem(index) == null
	}
	return index
}

export { createItem, getItem, removeItem ,generateID}
