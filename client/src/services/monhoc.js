import axiosConfig from "../axiosConfig"

export const apiCreateMonhoc = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/monhocs/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiGetAllMonhoc = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/monhocs",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiDeleteMonhoc = (msmh) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "delete",
				url: `/monhocs/remove?msmh=${msmh}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiGetMonhocsLimit = (page) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: `/monhocs/limit?page=${page}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiUpdateMonhoc = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "put",
				url: "/monhocs/edit",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
