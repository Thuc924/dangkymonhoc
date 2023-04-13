import { actionType } from '../actions/actionType'
const initState = {
   hockys: [],
   token: null,
   msg: '',
}

const hockyReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.GET_ALL_HOCKY: {
         return {
            ...state,
            hockys: action.data || [],
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

export default hockyReducer
