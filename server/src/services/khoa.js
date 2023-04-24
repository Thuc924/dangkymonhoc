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
            jwt.sign({ mskhoa: response[0].mskhoa, tenkhoa: response[0].tenkhoa }, process.env.SECRET_KEY, {
               expiresIn: '2d',
            })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Create is successfully !' : 'MSKHOA number has been aldready used !',
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
            const mh = await db.Monhoc.findOne({ where: { mskhoa } })
            if (!mh) {
               await khoa.destroy()
               const token =
                  khoa.destroy() &&
                  jwt.sign({ mskhoa: khoa.destroy().mskhoa, tenkhoa: khoa.destroy().tenkhoa }, process.env.SECRET_KEY, {
                     expiresIn: '2d',
                  })
               resolve({
                  err: 0,
                  msg: 'Delete success...!',
                  token: token || null,
               })
            } else {
               resolve({
                  err: 2,
                  msg: 'KHOA already in model MONHOC...!',
               })
            }
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
