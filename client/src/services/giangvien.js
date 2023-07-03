import axiosConfig from "../axiosConfig"

export const apiCreateGiangvien = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/giangvien/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiGetAllGiangvien = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/giangvien",
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
