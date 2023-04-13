import { actionType } from '../actions/actionType'
const initState = {
   lops: [],
   token: null,
   msg: '',
}

const lopReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.GET_ALL_LOP: {
         return {
            ...state,
            lops: action.data || [],
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

export default lopReducer
