import { actionType } from '../actions/actionType'
const initState = {
   isLoggedIn: false,
   token: null,
   msg: '',
   admin: [],
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.LOGIN_SUCCESS: {
         return {
            ...state,
            isLoggedIn: true,
            token: action.data,
            msg: '',
            admin: action.admin,
         }
      }
      case actionType.LOGIN_FAIL: {
         return {
            ...state,
            isLoggedIn: false,
            msg: action.data,
            token: null,
         }
      }
      case actionType.LOGOUT: {
         return {
            ...state,
            isLoggedIn: false,
            token: null,
            msg: '',
         }
      }

      default:
         return state
   }
}

export default authReducer
