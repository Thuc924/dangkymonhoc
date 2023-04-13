import db from '../models'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

export const createLop = ({ mslop, tenlop, mskhoa }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Lophoc.findOrCreate({
            where: { tenlop },
            defaults: {
               id: v4(),
               mslop,
               tenlop,
               mskhoa,
            },
         })
         const token =
            response[1] &&
            jwt.sign({ mslop: response[0].mslop, tenlop: response[0].tenlop }, process.env.SECRET_KEY, {
               expiresIn: '2d',
            })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Create is successfully !' : 'TENLOP has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAllLops = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Lophoc.findAll({
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Khoa,
                  as: 'khoa',
                  attributes: ['tenkhoa'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list Lop ok...!' : 'Get list Lop fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const LophocDelete = (mslop) =>
   new Promise(async (resolve, reject) => {
      try {
         const lop = await db.Lophoc.findOne({
            where: { mslop },
         })
         if (lop) {
            const sv = await db.Sinhvien.findOne({ where: { mslop } })
            if (!sv) {
               await lop.destroy()
               resolve({
                  err: 0,
                  msg: 'Delete success...!',
               })
            } else {
               resolve({
                  err: 2,
                  msg: 'LOP already in model SINHVIEN...!',
               })
            }
         } else {
            resolve({
               err: 2,
               msg: 'MSLOP not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
