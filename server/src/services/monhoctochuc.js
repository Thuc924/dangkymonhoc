import db from '../models'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

export const addMHTC = ({ msmh, mshocky }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Monhoctochuc.findOrCreate({
            where: { msmh },
            defaults: {
               id: v4(),
               msmh,
               mshocky,
            },
         })
         resolve(response)
         const token =
            response[1] &&
            jwt.sign({ msmh: response[0].msmh, mshocky: response[0].mshocky }, process.env.SECRET_KEY, {
               expiresIn: '2d',
            })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Add is successfully !' : 'MSMH has been aldready !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAll = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Monhoctochuc.findAll({
            nest: true,
            raw: true,
            include: [
               {
                  model: db.Monhoc,
                  as: 'monhoc',
                  attributes: ['tenmh', 'mskhoa', 'sotinchi'],
               },
               {
                  model: db.Hocky,
                  as: 'hockies',
                  attributes: ['tenhocky'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list monhoctochuc ok...!' : 'Get list monhoctochuc fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const monhoctochucDelete = (msmh) =>
   new Promise(async (resolve, reject) => {
      try {
         const mh = await db.Monhoctochuc.findOne({
            where: { msmh },
         })
         if (mh) {
            await mh.destroy()
            const token =
               mh.destroy() &&
               jwt.sign({ msmh: mh.destroy().msmh, mshocky: mh.destroy().mshocky }, process.env.SECRET_KEY, {
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
               msg: 'MSKHOA not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
