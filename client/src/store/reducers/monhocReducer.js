import { actionType } from '../actions/actionType'
const initState = {
   monhocs: [],
   token: null,
   msg: '',
}

const monhocReducer = (state = initState, action) => {
   switch (action.type) {
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
      case actionType.GET_ALL_MONHOC: {
         return {
            ...state,
            monhocs: action.data,
         }
      }
      default:
         return state
   }
}

export default monhocReducer
