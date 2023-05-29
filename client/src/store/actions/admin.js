import { actionType } from "./actionType"
import {
	apiGetAdminByMSQTV,
	apiGetAllAdmin,
	apiUpdateAdmin,
} from "../../services/admin"

export const getOneAdmin = (msqtv) => async (dispatch) => {
	try {
		const response = await apiGetAdminByMSQTV(msqtv)
		console.log(response)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ONE_ADMIN,
				data: response.data.response,
				token: response.data.token,
			})
		} else {
			dispatch({
				type: actionType.GET_ONE_ADMIN,
				msg: response.data.msg,
				token: null,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ONE_ADMIN,
			data: null,
			token: null,
		})
	}
}
export const getAllADmin = () => async (dispatch) => {
	try {
		const response = await apiGetAllAdmin()
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ALL_ADMIN,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_ALL_ADMIN,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ALL_ADMIN,
			data: null,
		})
	}
}
export const updateAdmin = (payload) => async (dispatch) => {
	try {
		const response = await apiUpdateAdmin(payload)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.UPDATE_SUCCESS,
				msg: response.data.msg,
				token: response.data.token,
			})
		} else {
			dispatch({
				type: actionType.UPDATE_FAIL,
				msg: response.data.msg,
				token: null,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.UPDATE_FAIL,
			data: null,
			token: null,
		})
	}
}
