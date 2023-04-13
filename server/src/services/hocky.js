import db from '../models'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

export const createHocky = ({ mshocky, tenhocky }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Hocky.findOrCreate({
            where: { mshocky },
            defaults: {
               id: v4(),
               mshocky,
               tenhocky,
            },
         })
         const token =
            response[1] &&
            jwt.sign({ mshocky: response[0].mshocky, tenhocky: response[0].tenhocky }, process.env.SECRET_KEY, {
               expiresIn: '2d',
            })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Create is successfully !' : 'MSHOCKY number has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })

export const getAll = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Hocky.findAll({
            raw: true,
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list hocky ok...!' : 'Get list hocky fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const HockyDelete = (mshocky) =>
   new Promise(async (resolve, reject) => {
      try {
         const khoa = await db.Hocky.findOne({
            where: { mshocky },
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
               msg: 'MSHOCKY not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
