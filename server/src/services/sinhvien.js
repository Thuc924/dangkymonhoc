import db from '../models'
import bcrytp from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = (matkhau) =>
   bcrytp.hashSync(matkhau, bcrytp.genSaltSync(12))

export const getAllSinhviens = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Sinhvien.findAll({
            raw: true,
         })
         resolve({
            err: response ? 0 : 1,
            msg: response
               ? 'Get list Sinhvien ok...!'
               : 'Get list Sinhvien fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getLimitSinhvien = (offset) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Sinhvien.findAndCountAll({
            raw: true,
            nest: true,
            offset: offset * +process.env.LIMIT || 0,
            limit: +process.env.LIMIT,
         })
         resolve({
            err: response ? 0 : 1,
            msg: response
               ? 'Get list Sinhvien ok...!'
               : 'Get list Sinhvien fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })

export const createSinhvien = ({
   mssv,
   tensv,
   email,
   matkhau,
   diachi,
   sodienthoai,
   ngaysinh,
   noisinh,
   gioitinh,
   avatar,
}) =>
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
         const token =
            response[1] &&
            jwt.sign(
               { mssv: response[0].mssv, email: response[0].email },
               process.env.SECRET_KEY,
               { expiresIn: '2d' }
            )
         resolve({
            err: token ? 0 : 2,
            msg: token
               ? 'Create is successfully !'
               : 'MSSV number has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })

export const SinhvienDelete = (mssv) =>
   new Promise(async (resolve, reject) => {
      try {
         const sv = await db.Sinhvien.findOne({
            where: { mssv },
         })
         if (sv) {
            const response = await sv.destroy()
            resolve({
               err: 0,
               msg: 'Delete success...!',
            })
         } else {
            resolve({
               err: 2,
               msg: 'MSSV not found...!',
            })
         }
         // resolve({
         //    err: response ? 0 : 2,
         //    msg: response ? 'Delete success...!' : 'MSSV not found...!',
         // })
      } catch (error) {
         reject(error)
      }
   })
