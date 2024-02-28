import axios from 'axios'

export const instance = axios.create({
	baseURL: import.meta.env.VITE_REACT_APP_API_URI,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

export const get = async url => {
	try {
		const { data, status, headers } = await instance.get(url)
		return { ok: true, data, status, headers }
	} catch (err) {
		return { ok: false, error: err, status: 500 }
	}
}

export const post = async (url, body) => {
	try {
		const { data, status } = await instance.post(url, body)
		return { ok: true, data, status }
	} catch (err) {
		return { ok: false, error: err, status: 500 }
	}
}

export const destroy = async url => {
	try {
		const { status } = await instance.delete(url)
		return { ok: true, status }
	} catch (err) {
		return { ok: false, error: err, status: 500 }
	}
}

export const put = async (url, body) => {
	try {
		const { data, status } = await instance.put(url, body)
		return { ok: true, data, status }
	} catch (err) {
		return { ok: false, error: err, status: 500 }
	}
}

export const patch = async (url, body) => {
	try {
		const { data, status } = await instance.patch(url, body)
		return { ok: true, data, status }
	} catch (err) {
		return { ok: false, error: err, status: 500 }
	}
}