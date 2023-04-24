import { actionType } from './actionType'
import { apiGetAdmin, apiGetAdminByMSQTV, apiGetAllAdmin, apiUpdateAdmin } from '../../services/admin'

export const getADmin = (payload) => async (dispatch) => {
   try {
      const response = await apiGetAdmin(payload)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ONE_ADMIN,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ONE_ADMIN,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_ADMIN,
         data: null,
      })
   }
}
export const getOneAdmin = (msqtv) => async (dispatch) => {
   try {
      const response = await apiGetAdminByMSQTV(msqtv)
      // console.log(response.data.response)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ONE_ADMIN,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ONE_ADMIN,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_ADMIN,
         data: null,
      })
   }
}
export const getAllADmin = () => async (dispatch) => {
   try {
      const response = await apiGetAllAdmin()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_ADMIN,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_ADMIN,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_ADMIN,
         data: null,
      })
   }
}
export const updateAdmin = (payload) => async (dispatch) => {
   try {
      const response = await apiUpdateAdmin(payload)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.UPDATE_SUCCESS,
            data: response.data.msg,
         })
      } else {
         dispatch({
            type: actionType.UPDATE_FAIL,
            data: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.UPDATE_FAIL,
         data: null,
      })
   }
}
