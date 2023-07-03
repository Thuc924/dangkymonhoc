import { actionType } from "../actions/actionType"
const initState = {
	dshocphi: [],
	token: null,
	msg: "",
}

const hocphiReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.GET_ALL_HOCPHI: {
			return {
				...state,
				dshocphi: action.data || [],
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

export default hocphiReducer
