import axiosConfig from "../axiosConfig"

export const apiCreateLop = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/lops/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiGetAllLop = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/lops",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiDeleteLop = (mslop) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "delete",
				url: `/lops/remove?mslop=${mslop}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
