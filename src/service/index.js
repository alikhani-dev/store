import axios from 'axios'

export const get = async (url, config) => {
	return await axios.get(url, config && config)
}

export const post = async (url, data, config) => {
	return await axios.post(url, data && data, config && config)
}

export const remove = async (url, config) => {
	return await axios.delete(url, config && config)
}

export const put = async (url, data, config) => {
	return await axios.put(url, data && data, config && config)
}
