import { actionType } from './actionType'
import { apiGetAdmin } from '../../services/admin'

export const getADmin = (payload) => async (dispatch) => {
   try {
      const response = await apiGetAdmin(payload)
      console.log(response)
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
