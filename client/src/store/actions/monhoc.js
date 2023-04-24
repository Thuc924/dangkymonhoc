import { actionType } from './actionType'
import {} from '../../services/sinhvien'
import {
   apiCreateMonhoc,
   apiDeleteMonhoc,
   apiGetAllMonhoc,
   apiGetMonhocsLimit,
   apiUpdateMonhoc,
} from '../../services/monhoc'

export const createMonhoc = (payload) => async (dispatch) => {
   try {
      const response = await apiCreateMonhoc(payload)
      console.log(response)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.ADD_MH_SUCCESS,
            data: response.data.token || null,
         })
      } else {
         dispatch({
            type: actionType.ADD_MH_FAIL,
            data: response.data.msg || '',
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.ADD_MH_FAIL,
         data: null,
      })
   }
}
export const getListMonhoc = () => async (dispatch) => {
   try {
      const response = await apiGetAllMonhoc()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_MONHOC,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_MONHOC,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_MONHOC,
         data: null,
      })
   }
}
export const deleteMonhocByMSMH = (msmh) => async (dispatch) => {
   try {
      const response = await apiDeleteMonhoc(msmh)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.DELETE_SUCCESS,
            msg: response.data.msg,
            token: response.data.token,
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
export const getListMonhocLimit = (page) => async (dispatch) => {
   try {
      const response = await apiGetMonhocsLimit(page)
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_LIMIT_MONHOC,
            data: response.data.response?.rows,
            count: response.data.response?.count,
         })
      } else {
         dispatch({
            type: actionType.GET_LIMIT_MONHOC,
            msg: response.data.msg,
         })
      }
      // return respone.data
   } catch (error) {
      dispatch({
         type: actionType.GET_LIMIT_MONHOC,
         sinhviens: null,
      })
   }
}
export const updateMonhoc = (payload) => async (dispatch) => {
   try {
      const response = await apiUpdateMonhoc(payload)
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
