import { actionType } from '../actions/actionType'
const initState = {
   isLoggedIn: false,
   token: null,
   msg: '',
   admin: [],
   sinhvien: [],
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.LOGIN_SUCCESS: {
         return {
            ...state,
            isLoggedIn: true,
            token: action.data,
            msg: '',
            admin: action.admin || [],
            sinhvien: action.sinhvien || [],
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
            admin: [],
            sinhvien: [],
         }
      }

      default:
         return state
   }
}

export default authReducer
