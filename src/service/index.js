import axios from 'axios'

const instance = axios.create({
	// baseURL: 'https://fakestoreapi.com/',
	baseURL: 'https://mocki.io/',
})

export const get = async (url, config) => {
	return await instance.get(url, config && config)
}

export const remove = async (url, config) => {
	return await instance.delete(url, config && config)
}

export const post = async (url, data, config) => {
	return await instance.post(url, data && data, config && config)
}

export const put = async (url, data, config) => {
	return await instance.put(url, data && data, config && config)
}
