import { actionType } from '../actions/actionType'
const initState = {
   monhoctochucs: [],
   token: null,
   msg: '',
}

const monhoctochucReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.GET_ALL_MONHOCTOCHUC: {
         return {
            ...state,
            monhoctochucs: action.data,
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
            msg: action.msg || '',
         }
      }
      default:
         return state
   }
}

export default monhoctochucReducer
