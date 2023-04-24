import db from '../models'

export const getQTVOne = ({ msqtv }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Quantrivien.findOne({
            raw: true,
            where: { msqtv },
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get admin ok...!' : 'Get admin fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getQTVOneByMSQTV = ({ msqtv }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Quantrivien.findOne({
            raw: true,
            where: { msqtv },
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get admin ok...!' : 'Get admin fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getQTVAll = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Quantrivien.findAll({
            raw: true,
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get admin ok...!' : 'Get admin fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const AdminUpdate = ({ msqtv, tenqtv, email, matkhau, diachi, sodienthoai }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = db.Quantrivien.findOne({
            where: { msqtv },
            raw: true,
         })
         if (response) {
            db.Quantrivien.update(
               {
                  tenqtv: tenqtv ? tenqtv : response.tenqtv,
                  email: email ? email : response.email,
                  matkhau: matkhau ? matkhau : response.matkhau,
                  diachi: diachi ? diachi : response.diachi,
                  sodienthoai: sodienthoai ? sodienthoai : response.sodienthoai,
               },
               { where: { msqtv } }
            )
            resolve({
               err: 0,
               msg: 'Updata success...!',
            })
         } else {
            resolve({
               err: 2,
               msg: 'QTV not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
