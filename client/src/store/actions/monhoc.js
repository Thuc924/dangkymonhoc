import { actionType } from './actionType'
import {} from '../../services/sinhvien'
import { apiCreateMonhoc, apiGetAllMonhoc } from '../../services/monhoc'

export const createMonhoc = (payload) => async (dispatch) => {
   try {
      const response = await apiCreateMonhoc(payload)
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
