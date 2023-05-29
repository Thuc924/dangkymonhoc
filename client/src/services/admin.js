import axiosConfig from "../axiosConfig"

export const apiGetAllAdmin = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/admin/",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiGetAdminByMSQTV = (msqtv) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: `/admin/getone?msqtv=${msqtv}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiUpdateAdmin = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "put",
				url: "/admin/edit",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
