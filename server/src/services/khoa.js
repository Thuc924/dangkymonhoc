import db from '../models'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

export const createKhoa = ({ mskhoa, tenkhoa }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Khoa.findOrCreate({
            where: { mskhoa },
            defaults: {
               id: v4(),
               mskhoa,
               tenkhoa,
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
               : 'MSKHOA number has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAll = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Khoa.findAll({
            raw: true,
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list khoa ok...!' : 'Get list khoa fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const KhoaDelete = (mskhoa) =>
   new Promise(async (resolve, reject) => {
      try {
         const khoa = await db.Khoa.findOne({
            where: { mskhoa },
         })
         if (khoa) {
            await khoa.destroy()
            resolve({
               err: 0,
               msg: 'Delete success...!',
            })
         } else {
            resolve({
               err: 2,
               msg: 'MSKHOA not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })