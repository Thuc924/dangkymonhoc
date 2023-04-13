import { apiCreateHocky, apiDeleteHocky, apiGetAllHocky } from '../../services/hocky'
import { actionType } from './actionType'

export const createHocky = (payload) => async (dispatch) => {
   try {
      const response = await apiCreateHocky(payload)
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
export const getListHocky = () => async (dispatch) => {
   try {
      const response = await apiGetAllHocky()
      if (response?.data.err === 0) {
         dispatch({
            type: actionType.GET_ALL_HOCKY,
            data: response.data.response,
         })
      } else {
         dispatch({
            type: actionType.GET_ALL_HOCKY,
            msg: response.data.msg,
         })
      }
   } catch (error) {
      dispatch({
         type: actionType.GET_ALL_HOCKY,
         data: null,
      })
   }
}
export const deleteHockyByMShocky = (mshocky) => async (dispatch) => {
   try {
      const response = await apiDeleteHocky(mshocky)
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
         hockys: null,
      })
   }
}
