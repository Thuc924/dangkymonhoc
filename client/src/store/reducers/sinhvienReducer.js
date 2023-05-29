import { actionType } from "../actions/actionType"
const initState = {
	sinhviens: {},
	token: null,
	msg: "",
	count: 0,
	currentSinhvien: {},
}

const sinhvienReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.ADD_SUCCESS: {
			return {
				...state,
				isLoggedIn: true,
				token: action.data,
			}
		}
		case actionType.ADD_FAIL: {
			return {
				...state,
				isLoggedIn: true,
				msg: action.data,
				token: null,
			}
		}
		case actionType.GET_ALL_SINHVIEN:
		case actionType.GET_LIMIT: {
			return {
				...state,
				sinhviens: action.data || {},
				msg: action.msg || "",
				count: action.count || 0,
			}
		}
		case actionType.DELETE_SUCCESS: {
			return {
				...state,
				msg: action.msg || "",
				token: action.token,
			}
		}
		case actionType.DELETE_FAIL: {
			return {
				...state,
				msg: action.msg || "",
			}
		}
		case actionType.UPDATE_SUCCESS:
		case actionType.UPDATE_FAIL: {
			return {
				...state,
				msg: action.msg || "",
				token: action.token || null,
			}
		}
		case actionType.UPDATE_PASS_SUCCESS:
		case actionType.UPDATE_PASS_FAIL: {
			return {
				...state,
				msg: action.msg || "",
			}
		}
		case actionType.GET_ONE_SINHVIEN: {
			return {
				...state,
				currentSinhvien: action.currentData || {},
			}
		}
		case actionType.LOGOUT_SINHVIEN: {
			return {
				...state,
				currentSinhvien: {},
			}
		}

		default:
			return state
	}
}

export default sinhvienReducer
