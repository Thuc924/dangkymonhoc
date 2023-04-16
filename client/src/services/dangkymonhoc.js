import axiosConfig from '../axiosConfig'

export const apiAddMonhocInDSDKMH = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/dangkymonhocs/create',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })

export const apiGetAllDSDKMH = (mssv) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: `/dangkymonhocs?mssv=${mssv}`,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiGetAll = (mssv) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: '/dangkymonhocs/all',
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiDeleteMonHocInDSDKMH = (msmh) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'delete',
            url: `/dangkymonhocs/remove?msmh=${msmh}`,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
