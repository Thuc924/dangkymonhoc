import axiosConfig from "../axiosConfig"

export const apiCreateSinhvien = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/sinhviens/create",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiGetSinhviens = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/sinhviens",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiGetSVByMSSV = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: "/sinhviens/mssv",
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiGetSinhviensLimit = (page) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "get",
				url: `/sinhviens/limit?page=${page}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiDeleteSinhvien = (mssv) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "delete",
				url: `/sinhviens/remove?mssv=${mssv}`,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiUpdateSinhvien = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "put",
				url: "/sinhviens/edit",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiEditPasswordSinhvien = (newPass) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/sinhviens/edit-pass",
				data: newPass,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
