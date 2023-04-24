import db from '../models'
import { v4 } from 'uuid'
import jwt from 'jsonwebtoken'
require('dotenv').config()

export const addMonhocInDSDKMH = ({ msmh, mssv, hocphi }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.PhieuDKMH.create({
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
         const response = await db.PhieuDKMH.findAll({
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Monhoc,
                  as: 'monhocDK',
                  attributes: ['tenmh', 'sotinchi', 'mskhoa'],
               },
               {
                  model: db.Sinhvien,
                  as: 'Sinhvien',
                  attributes: ['tensv'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get DSDKMH ok...!' : 'Get DSDKMH fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const getAllSV = (mssv) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.PhieuDKMH.findAll({
            where: { mssv },
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Monhoc,
                  as: 'monhocDK',
                  attributes: ['tenmh', 'sotinchi'],
               },
               {
                  model: db.Sinhvien,
                  as: 'Sinhvien',
                  attributes: ['tensv'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get DSDKMH ok...!' : 'Get DSDKMH fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const DeleteMonhocInDSDKMH = (msmh) =>
   new Promise(async (resolve, reject) => {
      try {
         const mh = await db.PhieuDKMH.findOne({
            where: { msmh },
         })
         if (mh) {
            await mh.destroy()
            resolve({
               err: 0,
               msg: 'Delete success...!',
            })
         } else {
            resolve({
               err: 2,
               msg: 'MSMH not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
