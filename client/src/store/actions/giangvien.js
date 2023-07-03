import { actionType } from "./actionType"
import {
	apiCreateGiangvien,
	apiGetAllGiangvien,
} from "../../services/giangvien"

export const createGiangvien = (payload) => async (dispatch) => {
	try {
		const response = await apiCreateGiangvien(payload)
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
export const getListGiangvien = () => async (dispatch) => {
	try {
		const response = await apiGetAllGiangvien()
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ALL_GIANGVIEN,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_ALL_GIANGVIEN,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ALL_GIANGVIEN,
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
