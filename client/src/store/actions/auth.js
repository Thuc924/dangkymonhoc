import { actionType } from './actionType'
import { apiLogin } from '../../services/auth'

export const login = (payload) => async (dispatch) => {
   try {
      const response = await apiLogin(payload)
      console.log(response)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.LOGIN_SUCCESS,
            data: response.data.token,
            admin: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.LOGIN_FAIL,
            data: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.LOGIN_FAIL,
         data: null,
      })
   }
}
export const logout = () => ({
   type: actionType.LOGOUT,
})
