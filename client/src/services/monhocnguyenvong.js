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
export const apiDeleteMonHocInDSDKMH = (msmh) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "delete",
				url: `/dangkymonhocs/remove?msmh=${msmh}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
