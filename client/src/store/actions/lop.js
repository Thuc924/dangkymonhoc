import { actionType } from './actionType'
import { apiCreateLop, apiDeleteLop, apiGetAllLop } from '../../services/lop'

export const createLop = (payload) => async (dispatch) => {
   try {
      const response = await apiCreateLop(payload)
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
export const getListLop = () => async (dispatch) => {
   try {
      const response = await apiGetAllLop()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_LOP,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_LOP,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_LOP,
         data: null,
      })
   }
}
export const deleteLopByMslop = (mslop) => async (dispatch) => {
   try {
      const response = await apiDeleteLop(mslop)
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
