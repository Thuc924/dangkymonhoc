import axiosConfig from "../axiosConfig"

export const apiCreateHocphi = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/hocphi/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiGetAllDSHocphi = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/hocphi",
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
