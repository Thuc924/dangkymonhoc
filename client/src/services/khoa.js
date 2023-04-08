import axiosConfig from '../axiosConfig'

export const apiCreateKhoa = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/khoas/create',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })

export const apiGetAllKhoa = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: '/khoas',
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiDeleteKhoa = (mskhoa) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'delete',
            url: `/khoas/remove?mskhoa=${mskhoa}`,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
