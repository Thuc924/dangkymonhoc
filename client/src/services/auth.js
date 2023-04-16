import axiosConfig from '../axiosConfig'

export const apiLogin = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })

export const apiLoginSinhvien = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/auth/loginSinhvien',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
