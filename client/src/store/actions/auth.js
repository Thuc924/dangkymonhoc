import { actionType } from "./actionType"
import {
	apiLoginAdmin,
	apiLoginSinhvien,
	apiResetPass,
	apiSendEmailResetPass,
} from "../../services/auth"

export const loginAdmin = (payload) => async (dispatch) => {
	try {
		const response = await apiLoginAdmin(payload)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.LOGIN_SUCCESS,
				data: response.data.token,
				admin: response.data.response,
				msg: response.data.msg,
			})
		} else {
			dispatch({
				type: actionType.LOGIN_ADMIN_FAIL,
				data: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.LOGIN_ADMIN_FAIL,
			data: null,
		})
	}
}
export const loginSinhvien = (payload) => async (dispatch) => {
	try {
		const response = await apiLoginSinhvien(payload)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.LOGIN_SV_SUCCESS,
				data: response.data.token,
				sinhvien: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.LOGIN_SINHVIEN_FAIL,
				data: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.LOGIN_SINHVIEN_FAIL,
			data: null,
		})
	}
}
export const sendEmail = (payload) => async (dispatch) => {
	try {
		const response = await apiSendEmailResetPass(payload)
		console.log(response)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.SEND_EMAIL_SUCCESS,
				msg: response.data.msg,
			})
		} else {
			dispatch({
				type: actionType.SEND_EMAIL_FAIL,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.SEND_EMAIL_FAIL,
			msg: "",
		})
	}
}
export const ResetPassWord = (email, newPass) => async (dispatch) => {
	try {
		const response = await apiResetPass(email, newPass)
		console.log("Email:", email)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.RESET_SUCCESS,
				msg: response.data.msg,
			})
		} else {
			dispatch({
				type: actionType.RESET_FAIL,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.RESET_FAIL,
			msg: "",
		})
	}
}
export const logoutAdmin = () => ({
	type: actionType.LOGOUT_ADMIN,
})
export const logoutSinhvien = () => ({
	type: actionType.LOGOUT_SINHVIEN,
})
