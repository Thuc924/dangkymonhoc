import { actionType } from "./actionType"
import { apiCreateLopHoc, apiGetAllLophoc } from "../../services/lophoc"

export const createLopHoc = (payload) => async (dispatch) => {
	try {
		const response = await apiCreateLopHoc(payload)
		console.log(response)
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
export const getListLophoc = () => async (dispatch) => {
	try {
		const response = await apiGetAllLophoc()
		if (response?.data.err === 0) {
			dispatch({
				type: actionType.GET_ALL_LOPHOC,
				data: response.data.response,
			})
		} else {
			dispatch({
				type: actionType.GET_ALL_LOPHOC,
				msg: response.data.msg,
			})
		}
	} catch (error) {
		dispatch({
			type: actionType.GET_ALL_LOPHOC,
			data: null,
		})
	}
}
// export const deleteLopByMslop = (mslop) => async (dispatch) => {
//    try {
//       const response = await apiDeleteLop(mslop)
//       if (response?.data.err === 0) {
//          dispatch({
//             type: actionType.DELETE_SUCCESS,
//             msg: response.data.msg,
//             token: response.data.token,
//          })
//       } else {
//          dispatch({
//             type: actionType.DELETE_FAIL,
//             msg: response.data.msg,
//          })
//       }
//       // return respone.data
//    } catch (error) {
//       dispatch({
//          type: actionType.DELETE_FAIL,
//          sinhviens: null,
//       })
//    }
// }
