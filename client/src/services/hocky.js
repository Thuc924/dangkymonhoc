import axiosConfig from "../axiosConfig"

export const apiCreateHocky = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/hockies/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiGetAllHocky = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/hockies",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiDeleteHocky = (mshocky) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "delete",
				url: `/hockies/remove?mshocky=${mshocky}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
