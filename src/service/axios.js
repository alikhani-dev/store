import axios from 'axios'

export const get = (url, config) => {
	return axios.get(url, config && config)
}

export const post = (url, data, config) => {
	return axios.post(url, data && data, config && config)
}

export const remove = (url, config) => {
	return axios.delete(url, config && config)
}

export const d = (url, data, config) => {
	return axios.put(url, data && data, config && config)
}