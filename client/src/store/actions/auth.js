import { actionType } from './actionType'
import { apiLoginAdmin, apiLoginSinhvien } from '../../services/auth'

export const loginAdmin = (payload) => async (dispatch) => {
   try {
      const response = await apiLoginAdmin(payload)
      console.log(response)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.LOGIN_SUCCESS,
            data: response.data.token,
            admin: response.data.response,
            msg: response.data.msg,
         })
      } else {
         dispatch({
            type: actionType.LOGIN_ADMIN_FAIL,
            data: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.LOGIN_ADMIN_FAIL,
         data: null,
      })
   }
}
export const loginSinhvien = (payload) => async (dispatch) => {
   try {
      const response = await apiLoginSinhvien(payload)
      console.log(response)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.LOGIN_SV_SUCCESS,
            data: response.data.token,
            sinhvien: response.data.response,
            msg: response.data.msg,
         })
      } else {
         dispatch({
            type: actionType.LOGIN_SINHVIEN_FAIL,
            data: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.LOGIN_SINHVIEN_FAIL,
         data: null,
      })
   }
}
export const logoutAdmin = () => ({
   type: actionType.LOGOUT_ADMIN,
})
export const logoutSinhvien = () => ({
   type: actionType.LOGOUT_SINHVIEN,
})
