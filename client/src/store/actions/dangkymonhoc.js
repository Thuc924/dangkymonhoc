import {
	apiAddMonhocInDSDKMH,
	apiDeleteMonHocInDSDKMH,
	apiGetAll,
	apiGetAllBySV,
} from "../../services/dangkymonhoc"
import { actionType } from "./actionType"

export const addMonhoc = (payload) => async (dispatch) => {
	try {
		const response = await apiAddMonhocInDSDKMH(payload)
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
export const getListMonhocByMSSV = (mssv) => async (dispatch) => {
	try {
		const response = await apiGetAllBySV(mssv)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_SV_DSDKMH,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_SV_DSDKMH,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_SV_DSDKMH,
			data: null,
		})
	}
}
export const getAllDSMH = () => async (dispatch) => {
	try {
		const response = await apiGetAll()
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ALL_DSDKMH,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_ALL_DSDKMH,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ALL_DSDKMH,
			data: null,
		})
	}
}
export const deleteMonHocInDSDKMH = (msmh) => async (dispatch) => {
	try {
		const response = await apiDeleteMonHocInDSDKMH(msmh)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.DELETE_SUCCESS,
				msg: response.data.msg,
			})
		} else {
			dispatch({
				type: actionType.DELETE_FAIL,
				msg: response.data.msg,
			})
		}
		// return respone.data
	} catch (error) {
		dispatch({
			type: actionType.DELETE_FAIL,
			hockys: null,
		})
	}
}
