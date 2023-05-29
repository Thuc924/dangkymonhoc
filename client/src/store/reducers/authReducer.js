import { actionType } from "../actions/actionType"
const initState = {
	isLoggedInAdmin: false,
	isLoggedInSinhvien: false,
	tokenAdmin: null,
	tokenSinhvien: null,
	msgAdmin: "",
	msgSinhvien: "",
	admin: {},
	sinhvien: {},
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.LOGIN_SUCCESS: {
			return {
				...state,
				isLoggedInAdmin: true,
				tokenAdmin: action.data,
				msgAdmin: action.msg || "",
				admin: action.admin || {},
			}
		}
		case actionType.LOGIN_SV_SUCCESS: {
			return {
				...state,
				isLoggedInSinhvien: true,
				tokenSinhvien: action.data,
				sinhvien: action.sinhvien || {},
			}
		}
		case actionType.LOGIN_ADMIN_FAIL: {
			return {
				...state,
				isLoggedInAdmin: false,
				msgAdmin: action.data,
				tokenAdmin: null,
				admin: {},
			}
		}
		case actionType.LOGIN_SINHVIEN_FAIL: {
			return {
				...state,
				isLoggedInSinhvien: false,
				msgSinhvien: action.data,
				tokenSinhvien: null,
				sinhvien: {},
			}
		}
		case actionType.LOGOUT_ADMIN: {
			return {
				...state,
				isLoggedInAdmin: false,
				tokenAdmin: null,
				msgAdmin: "",
				admin: {},
			}
		}
		case actionType.LOGOUT_SINHVIEN: {
			return {
				...state,
				isLoggedInSinhvien: false,
				msgSinhvien: "",
				sinhvien: {},
				tokenSinhvien: null,
			}
		}
		case actionType.SEND_EMAIL_FAIL:
		case actionType.SEND_EMAIL_SUCCESS: {
			return {
				...state,
				msgSinhvien: action.msg,
			}
		}
		case actionType.RESET_SUCCESS:
		case actionType.RESET_FAIL: {
			return {
				...state,
				msgSinhvien: action.msg,
			}
		}
		default:
			return state
	}
}

export default authReducer
