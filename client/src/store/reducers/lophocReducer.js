import { actionType } from "../actions/actionType"
const initState = {
	lophocs: [],
	token: null,
	msg: "",
}

const lophocReducer = (state = initState, action) => {
	switch (action.type) {
		case actionType.GET_ALL_LOPHOC: {
			return {
				...state,
				lophocs: action.data || [],
			}
		}
		case actionType.ADD_SUCCESS: {
			return {
				...state,
				token: action.data,
				msg: "",
			}
		}
		case actionType.ADD_FAIL: {
			return {
				...state,
				msg: action.data,
				token: null,
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

export default lophocReducer
