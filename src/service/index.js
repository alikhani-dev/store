import axios from 'axios'

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
})

const get = async (url = '', config) => {
	return await instance.get(url, config && config)
}

const remove = async (url = '', config) => {
	return await instance.delete(url, config && config)
}

const post = async (url = '', data, config) => {
	return await instance.post(url, data && data, config && config)
}

const put = async (url = '', data, config) => {
	return await instance.put(url, data && data, config && config)
}

export { get, remove, post, put }
