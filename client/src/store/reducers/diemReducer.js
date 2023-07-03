import { actionType } from "../actions/actionType"
const initState = {
	dsdiem: [],
	listDiemMh: [],
	token: null,
	msg: "",
}

const diemReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.GET_ALL_DS_DIEM: {
			return {
				...state,
				dsdiem: action.data || [],
			}
		}
		case actionType.GET_DIEM_MSSV: {
			return {
				...state,
				listDiemMh: action.data || [],
			}
		}
		case actionType.ADD_SUCCESS: {
			return {
				...state,
				token: action.data,
			}
		}
		case actionType.ADD_FAIL: {
			return {
				...state,
				msg: action.data,
			}
		}
		// case actionType.DELETE_SUCCESS: {
		// 	return {
		// 		...state,
		// 		msg: action.msg || "",
		// 		token: action.token,
		// 	}
		// }
		// case actionType.DELETE_FAIL: {
		// 	return {
		// 		...state,
		// 		msg: action.msg || "",
		// 	}
		// }
		default:
			return state
	}
}

export default diemReducer
