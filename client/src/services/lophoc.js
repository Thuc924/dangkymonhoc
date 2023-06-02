import axiosConfig from "../axiosConfig"

export const apiCreateLopHoc = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/lophoc/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiGetAllLophoc = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/lophoc",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
// export const apiDeleteLop = (mslop) =>
// 	new Promise(async (resolve, reject) => {
// 		try {
// 			const response = await axiosConfig({
// 				method: "delete",
// 				url: `/lops/remove?mslop=${mslop}`,
// 			})
// 			resolve(response)
// 		} catch (error) {
// 			reject(error)
// 		}
// 	})
