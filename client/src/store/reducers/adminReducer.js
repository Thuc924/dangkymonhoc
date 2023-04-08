import { actionType } from '../actions/actionType'
const initState = {
   msg: '',
   admin: [],
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.GET_ALL_ADMIN: {
         return {
            ...state,
            admin: action.data || [],
            msg: action.msg || '',
         }
      }
      default:
         return state
   }
}

export default authReducer
