import axiosConfig from '../axiosConfig'

export const apiCreateDiemMonHoc = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'post',
            url: '/diem/create',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })

export const apiGetDiemByMSSV = (mssv) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: `/diem/mssv?mssv=${mssv}`,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiGetAllDiem = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'get',
            url: '/diem',
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
export const apiGetUpdateDiem = (payload) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await axiosConfig({
            method: 'put',
            url: '/diem/edit',
            data: payload,
         })
         resolve(response)
      } catch (error) {
         reject(error)
      }
   })
