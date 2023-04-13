import axiosConfig from '../axiosConfig'

export const apiAddMonhoctochuc = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/monhoctochucs/add',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })

export const apiGetAllMonhoctochuc = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: '/monhoctochucs',
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiDeleteMonhoctochuc = (msmh) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'delete',
            url: `/monhoctochucs/remove?msmh=${msmh}`,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
