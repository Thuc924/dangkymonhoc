import axiosConfig from "../axiosConfig"

export const apiAddNguyenvong = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/dangkynguyenvong/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiGetAllNguyenVong = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/dangkynguyenvong",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiDeleteMonHocInDSMHNV = (mssv) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "delete",
				url: `/dangkynguyenvong/remove?mssv=${mssv}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
