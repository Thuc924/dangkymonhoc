import { actionType } from '../actions/actionType'
const initState = {
   khoas: [],
   token: null,
   msg: '',
}

const khoaReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.GET_ALL_KHOA: {
         return {
            ...state,
            khoas: action.data,
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
      case actionType.DELETE_SUCCESS: {
         return {
            ...state,
            msg: action.msg || '',
            token: action.token,
         }
      }
      case actionType.DELETE_FAIL: {
         return {
            ...state,
            msg: action.msg || '',
         }
      }
      default:
         return state
   }
}

export default khoaReducer
