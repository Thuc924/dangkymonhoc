import { v4 } from 'uuid'
import db from '../models'
import jwt from 'jsonwebtoken'
require('dotenv').config()

export const createMonhoc = ({ msmh, tenmh, sotinchi, mskhoa, mshocky, mota, sotiet }) =>
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
               mshocky,
               mota,
               sotiet,
            },
         })
         const token =
            response[1] &&
            jwt.sign({ msmh: response[0].msmh, tenmh: response[0].tenmh }, process.env.SECRET_KEY, { expiresIn: '2h' })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Create is successfully !' : 'MSMH has been aldready used !',
            token: token || null,
            response,
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
            nest: true,
            include: [
               {
                  model: db.Khoa,
                  as: 'khoaMH',
                  attributes: ['tenkhoa'],
               },
            ],
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list monhoc ok...!' : 'Get list monhoc fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const MonhocDelete = (msmh) =>
   new Promise(async (resolve, reject) => {
      try {
         const monhoc = await db.Monhoc.findOne({
            where: { msmh },
         })
         if (monhoc) {
            await monhoc.destroy()
            const token =
               monhoc.destroy() &&
               jwt.sign({ msmh: monhoc.destroy().msmh, tenmh: monhoc.destroy().tenmh }, process.env.SECRET_KEY, {
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
export const getLimitMonhoc = (offset) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Monhoc.findAndCountAll({
            raw: true,
            nest: true,
            include: [
               {
                  model: db.Khoa,
                  as: 'khoaMH',
                  attributes: ['tenkhoa'],
               },
            ],
            offset: offset * +process.env.LIMIT || 0,
            limit: +process.env.LIMIT,
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get list Monhoc ok...!' : 'Get list Monhoc fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
export const MonhocUpdate = ({ msmh, tenmh, sotinchi, mskhoa, mshocky, mota, sotiet }) =>
   new Promise(async (resolve, reject) => {
      try {
         const mh = await db.Monhoc.findOne({ where: { msmh } })
         if (mh) {
            await db.Monhoc.update(
               {
                  msmh: msmh ? msmh : mh.msmh,
                  tenmh: tenmh ? tenmh : mh.tenmh,
                  sotinchi: sotinchi ? sotinchi : mh.sotinchi,
                  mskhoa: mskhoa ? mskhoa : mh.mskhoa,
                  mshocky: mshocky ? mshocky : mh.mshocky,
                  mota: mota ? mota : mh.mota,
                  sotiet: sotiet ? sotiet : mh.sotiet,
               },
               { where: { msmh } }
            )
            // await mh.save()
            resolve({
               err: 0,
               msg: 'Updata success...!',
            })
         } else {
            resolve({
               err: 2,
               msg: 'MONHOC not found...!',
            })
         }
      } catch (error) {
         reject(error)
      }
   })
