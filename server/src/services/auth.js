import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
require('dotenv').config()
import db from '../models'

// const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const login = ({ msqtv, matkhau }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Quantrivien.findOne({
            where: { msqtv },
            raw: true,
         })
         const isCorrectPassword = response && response.matkhau === matkhau
         const token = isCorrectPassword && jwt.sign({ id: response.id, msqtv: response.msqtv }, process.env.SECRET_KEY, { expiresIn: '2d' })
         resolve({
            err: token ? 0 : 2,
            msg: token ? 'Login is successfully !' : response ? 'Password is wrong !' : 'MSQTV number not found !',
            token: token || null,
         })
      } catch (error) {
         reject(error)
      }
   })
