import {
	apiAddNguyenvong,
	apiDeleteMonHocInDSDKMH,
	apiDeleteMonHocInDSMHNV,
	apiGetAllNguyenVong,
} from "../../services/monhocnguyenvong"
import { actionType } from "./actionType"

export const addMonhocNguyenvong = (payload) => async (dispatch) => {
	try {
		const response = await apiAddNguyenvong(payload)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.ADD_SUCCESS,
				data: response.data.token,
			})
		} else {
			dispatch({
				type: actionType.ADD_FAIL,
				data: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.ADD_FAIL,
			data: null,
		})
	}
}
export const getAllDSNguyenVong = () => async (dispatch) => {
	try {
		const response = await apiGetAllNguyenVong()
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ALL_NGUYENVONG,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_ALL_NGUYENVONG,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ALL_NGUYENVONG,
			data: null,
		})
	}
}
export const deleteMonHocInDSMHNV = (mssv) => async (dispatch) => {
	try {
		const response = await apiDeleteMonHocInDSMHNV(mssv)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.DELETE_SUCCESS,
				msg: response.data.msg,
				token: response.data.token,
			})
		} else {
			dispatch({
				type: actionType.DELETE_FAIL,
				msg: response.data.msg,
				token: null,
			})
		}
		// return respone.data
	} catch (error) {
		dispatch({
			type: actionType.DELETE_FAIL,
			token: null,
			msg: "",
		})
	}
}
