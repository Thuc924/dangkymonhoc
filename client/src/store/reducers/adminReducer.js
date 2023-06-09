import { actionType } from "../actions/actionType"
const initState = {
	msg: "",
	admins: [],
	token: null,
}

const adminReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.GET_ALL_ADMIN: {
			return {
				...state,
				admins: action.data || [],
				msg: action.msg || "",
			}
		}
		case actionType.GET_ONE_ADMIN: {
			return {
				...state,
				admins: action.data || [],
				msg: action.msg || "",
				token: action.token,
			}
		}
		case actionType.UPDATE_SUCCESS:
		case actionType.UPDATE_FAIL: {
			return {
				...state,
				msg: action.msg || "",
				token: action.token,
			}
		}
		default:
			return state
	}
}

export default adminReducer
