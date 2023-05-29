import axiosConfig from "../axiosConfig"

export const apiLoginAdmin = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/api/v1/auth/login",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})

export const apiLoginSinhvien = (payload) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/api/v1/auth/loginSinhvien",
				data: payload,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiSendEmailResetPass = (email) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: "/api/v1/auth/password/email",
				data: email,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
export const apiResetPass = (email, newPass) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await axiosConfig({
				method: "post",
				url: `/api/v1/auth/password/reset?email=${email}`,
				data: newPass,
			})
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
