import axiosConfig from '../axiosConfig'

export const apiGetAdmin = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: '/admin',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
