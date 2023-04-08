import { v4 } from 'uuid'
import db from '../models'
import jwt from 'jsonwebtoken'
require('dotenv').config()

export const createMonhoc = ({ msmh, tenmh, sotinchi, mskhoa }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Monhoc.findOrCreate({
            where: { msmh },
            defaults: {
               id: v4(),
               msmh,
               tenmh,
               sotinchi,
               mskhoa,
            },
         })
         const token =
            response[1] &&
            jwt.sign(
               { msmh: response[0].msmh, tenmh: response[0].tenmh },
               process.env.SECRET_KEY,
               { expiresIn: '2d' }
            )
         resolve({
            err: token ? 0 : 2,
            msg: token
               ? 'Create is successfully !'
               : 'MSMH has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAll = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Monhoc.findAll({
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
