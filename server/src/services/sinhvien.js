import db from '../models'
import bcrytp from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = (matkhau) => bcrytp.hashSync(matkhau, bcrytp.genSaltSync(12))

export const createSinhvien = ({ mssv, tensv, email, matkhau, diachi, sodienthoai, ngaysinh, noisinh, gioitinh, avatar }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Sinhvien.findOrCreate({
            where: { mssv },
            defaults: {
               id: v4(),
               mssv,
               tensv,
               email,
               matkhau: hashPassword(matkhau),
               diachi,
               sodienthoai,
               ngaysinh,
               noisinh,
               gioitinh,
               avatar,
            },
         })
         const token = response[1] && jwt.sign({ mssv: response[0].mssv, email: response[0].email }, process.env.SECRET_KEY, { expiresIn: '2d' })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Create is successfully !' : 'MSSV number has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
