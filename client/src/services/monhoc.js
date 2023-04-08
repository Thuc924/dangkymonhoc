import axiosConfig from '../axiosConfig'

export const apiCreateMonhoc = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/monhocs/create',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiGetAllMonhoc = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: '/monhocs',
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
