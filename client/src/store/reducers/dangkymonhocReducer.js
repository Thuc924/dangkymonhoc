import { actionType } from "../actions/actionType"
const initState = {
	danhsachsvdk: [],
	danhsachs: [],
	token: null,
	msg: "",
}

const dangKyMonhocReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.GET_SV_DSDKMH: {
			return {
				...state,
				danhsachsvdk: action.data || [],
			}
		}
		case actionType.GET_ALL_DSDKMH: {
			return {
				...state,
				danhsachs: action.data || [],
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
		case actionType.DELETE_SUCCESS:
		case actionType.DELETE_FAIL: {
			return {
				...state,
				msg: action.msg || "",
				token: action.token || null,
			}
		}
		default:
			return state
	}
}

export default dangKyMonhocReducer
