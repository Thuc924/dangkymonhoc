import { actionType } from './actionType'
import { apiGetAllKhoa, apiCreateKhoa, apiDeleteKhoa } from '../../services/khoa'

export const createKhoa = (payload) => async (dispatch) => {
   try {
      const response = await apiCreateKhoa(payload)
      console.log(response)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.ADD_SUCCESS,
            data: response.data.token,
         })
      } else {
         dispatch({
            type: actionType.ADD_FAIL,
            data: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.ADD_FAIL,
         data: null,
      })
   }
}
export const getListKhoa = () => async (dispatch) => {
   try {
      const response = await apiGetAllKhoa()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_KHOA,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_KHOA,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_KHOA,
         data: null,
      })
   }
}
export const deleteKhoaByMskhoa = (mskhoa) => async (dispatch) => {
   try {
      const response = await apiDeleteKhoa(mskhoa)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.DELETE_SUCCESS,
            msg: response.data.msg,
         })
      } else {
         dispatch({
            type: actionType.DELETE_FAIL,
            msg: response.data.msg,
         })
      }
      // return respone.data
   } catch (error) {
      dispatch({
         type: actionType.DELETE_FAIL,
         sinhviens: null,
      })
   }
}
