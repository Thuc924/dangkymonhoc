import { actionType } from './actionType'
import {
   apiCreateSinhvien,
   apiDeleteSinhvien,
   apiGetSinhviens,
   apiGetSinhviensLimit,
   apiUpdateSinhvien,
} from '../../services/sinhvien'

export const create = (payload) => async (dispatch) => {
   try {
      const response = await apiCreateSinhvien(payload)
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
export const getListSinhvien = () => async (dispatch) => {
   try {
      const response = await apiGetSinhviens()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_SINHVIEN,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_SINHVIEN,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_SINHVIEN,
         data: null,
      })
   }
}
export const getListSinhvienLimit = (page) => async (dispatch) => {
   try {
      const response = await apiGetSinhviensLimit(page)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_LIMIT,
            data: response.data.response?.rows,
            count: response.data.response?.count,
         })
      } else {
         dispatch({
            type: actionType.GET_LIMIT,
            msg: response.data.msg,
         })
      }
      // return respone.data
   } catch (error) {
      dispatch({
         type: actionType.GET_SV,
         sinhviens: null,
      })
   }
}
export const deleteSinhvienByMSSV = (mssv) => async (dispatch) => {
   try {
      const response = await apiDeleteSinhvien(mssv)
      console.log(response)
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
export const updateSinhvien = (payload) => async (dispatch) => {
   try {
      const response = await apiUpdateSinhvien(payload)
      console.log(response)
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
