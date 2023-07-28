import db from '../models'
import { v4 } from 'uuid'
import jwt from 'jsonwebtoken'
require('dotenv').config()

export const addMonhocnguyenvongInDSDKMH = ({ msmh, mssv, hocphi }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.MonHocNguyenVong.create({
            id: v4(),
            msmh,
            mssv,
            hocphi,
         })
         const token =
            response &&
            jwt.sign({ msmh: response.msmh }, process.env.SECRET_KEY, {
               expiresIn: '2d',
            })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'ADD is successfully !' : 'MSMH is exist!',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })

export const getAllDS = () =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.MonHocNguyenVong.findAll({
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Monhoc,
                  as: 'monhocNV',
                  attributes: ['tenmh', 'sotinchi'],
               },
               {
                  model: db.Sinhvien,
                  as: 'SinhvienNV',
                  attributes: ['tensv', 'mslop'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get  Danh sach nguyen vong ok...!' : 'Get  Danh sach nguyen vong fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const DeleteMonhocInDSDKMH = (mssv) =>
   new Promise(async (resolve, reject) => {
      try {
         const mh = await db.MonHocNguyenVong.findOne({
            where: { mssv },
         })
         if (mh) {
            const rp = await mh.destroy()
            const token = rp && jwt.sign({ mssv: mh.mssv, msmh: mh.msmh }, process.env.SECRET_KEY, { expiresIn: '2d' })
            resolve({
               err: 0,
               msg: 'Delete success...!',
               token: token || null,
            })
         } else {
            resolve({
               err: 2,
               msg: 'MSSV not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
