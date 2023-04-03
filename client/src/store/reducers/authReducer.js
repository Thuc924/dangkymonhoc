import { actionType } from '../actions/actionType'
import { useNavigate } from 'react-router-dom'
const initState = {
   isLoggedIn: false,
   token: null,
   msg: '',
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case actionType.LOGIN_SUCCESS: {
         return {
            ...state,
            isLoggedIn: true,
            token: action.data,
         }
      }
      case actionType.LOGIN_FAIL: {
         return {
            ...state,
            isLoggedIn: true,
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
