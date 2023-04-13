import { actionType } from './actionType'
import { apiAddMonhoctochuc, apiDeleteMonhoctochuc, apiGetAllMonhoctochuc } from '../../services/monhoctochuc'

export const addMonhoctochuc = (payload) => async (dispatch) => {
   try {
      const response = await apiAddMonhoctochuc(payload)
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
export const getListMonhoctochuc = () => async (dispatch) => {
   try {
      const response = await apiGetAllMonhoctochuc()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_MONHOCTOCHUC,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_MONHOCTOCHUC,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_MONHOCTOCHUC,
         data: null,
      })
   }
}
export const deleteMonhoctochucByMSMH = (msmh) => async (dispatch) => {
   try {
      const response = await apiDeleteMonhoctochuc(msmh)
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
