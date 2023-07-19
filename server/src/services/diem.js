import db from '../models'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

export const createDiem = ({ mssv, msmh, mshocky, diemthi, phanTramQT, phanTramGK, giuaky }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Diem.create({
            id: v4(),
            mssv,
            msmh,
            mshocky,
            diemthi,
            phanTramQT,
            phanTramGK,
            giuaky,
         })
         const token =
            response &&
            jwt.sign(
               {
                  mssv: response.mssv,
                  msmh: response.msmh,
               },
               process.env.SECRET_KEY,
               {
                  expiresIn: '2d',
               }
            )
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Create is successfully !' : 'MSGV has been aldready used !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAllDiem = ({ mssv }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Diem.findAll({
            where: { mssv },
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Monhoc,
                  as: 'Diem_MH',
                  attributes: ['tenmh', 'sotinchi', 'mshocky'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list diem ok...!' : 'Get list diem fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAllDSDiem = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Diem.findAll({
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Monhoc,
                  as: 'Diem_MH',
                  attributes: ['mshocky'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list diem ok...!' : 'Get list diem fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const DiemUpdate = ({ mssv, msmh, quatrinh, giuaky, diemthi }) =>
   new Promise(async (resolve, reject) => {
      try {
         const mh = await db.PhieuDKMH.findOne({ where: { msmh, mssv } })
         if (mh) {
            const ss = await db.Diem.update(
               {
                  ...mh,
                  quatrinh: quatrinh,
                  giuaky: giuaky,
                  diemthi: diemthi,
               },
               { where: { msmh, mssv } }
            )
            const token =
               ss &&
               jwt.sign({ msmh: mh.msmh, mssv: mh.mssv }, process.env.SECRET_KEY, {
                  expiresIn: '30m',
               })

            resolve({
               err: 0,
               msg: 'Updata success...!',
               token: token || null,
            })
         } else {
            resolve({
               err: 2,
               msg: 'MH not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
