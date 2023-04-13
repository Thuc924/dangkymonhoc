import { actionType } from '../actions/actionType'
const initState = {
   monhocs: [],
   token: null,
   msg: '',
   count: 0,
}

const monhocReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.ADD_MH_SUCCESS: {
         return {
            ...state,
            token: action.data,
         }
      }
      case actionType.ADD_MH_FAIL: {
         return {
            ...state,
            msg: action.data,
         }
      }
      case actionType.GET_ALL_MONHOC:
      case actionType.GET_LIMIT_MONHOC: {
         return {
            ...state,
            monhocs: action.data || [],
            msg: action.msg || '',
            count: action.count || 0,
         }
      }
      case actionType.DELETE_SUCCESS:
      case actionType.DELETE_FAIL: {
         return {
            ...state,
            msg: action.msg || '',
         }
      }
      case actionType.UPDATE_SUCCESS:
      case actionType.UPDATE_FAIL: {
         return {
            ...state,
            msg: action.data.msg,
         }
      }
      default:
         return state
   }
}

export default monhocReducer
