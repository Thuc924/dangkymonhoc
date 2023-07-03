import {
	apiCreateDiemMonHoc,
	apiGetAllDiem,
	apiGetDiemByMSSV,
} from "../../services/diem"
import { actionType } from "./actionType"

export const createDiem = (payload) => async (dispatch) => {
	try {
		const response = await apiCreateDiemMonHoc(payload)
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
export const getListDiem = (mssv) => async (dispatch) => {
	try {
		const response = await apiGetDiemByMSSV(mssv)
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_DIEM_MSSV,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_DIEM_MSSV,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_DIEM_MSSV,
			data: null,
		})
	}
}
export const getAllDSDiem = () => async (dispatch) => {
	try {
		const response = await apiGetAllDiem()
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ALL_DS_DIEM,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_ALL_DS_DIEM,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ALL_DS_DIEM,
			data: null,
		})
	}
}
// export const deleteLopByMslop = (mslop) => async (dispatch) => {
// 	try {
// 		const response = await apiDeleteLop(mslop)
// 		if (response?.data.err === 0) {
// 			dispatch({
// 				type: actionType.DELETE_SUCCESS,
// 				msg: response.data.msg,
// 				token: response.data.token,
// 			})
// 		} else {
// 			dispatch({
// 				type: actionType.DELETE_FAIL,
// 				msg: response.data.msg,
// 			})
// 		}
// 		// return respone.data
// 	} catch (error) {
// 		dispatch({
// 			type: actionType.DELETE_FAIL,
// 			sinhviens: null,
// 		})
// 	}
// }
