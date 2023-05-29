import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
require("dotenv").config()
import db from "../models"
const mailer = require("../util/sendEmail")
const hashPassword = (password) =>
	bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const login = ({ msqtv, matkhau }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Quantrivien.findOne({
				where: { msqtv },
				raw: true,
			})
			const isCorrectPassword = response && response.matkhau === matkhau
			const token =
				isCorrectPassword &&
				jwt.sign(
					{ id: response.id, msqtv: response.msqtv },
					process.env.SECRET_KEY,
					{ expiresIn: "1day" }
				)
			resolve({
				err: token ? 0 : 2,
				msg: token
					? "Login is successfully !"
					: response
					? "Password is wrong !"
					: "MSQTV not found !",
				token: token || null,
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const loginSinhvien = ({ mssv, matkhau }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findOne({
				where: { mssv },
				raw: true,
			})
			const isCorrectPassword =
				response && bcrypt.compareSync(matkhau, response.matkhau)

			const token =
				isCorrectPassword &&
				jwt.sign(
					{ email: response.email, mssv: response.mssv },
					process.env.SECRET_KEY,
					{ expiresIn: "30m" }
				)
			resolve({
				err: token ? 0 : 2,
				msg: token
					? "Login is successfully !"
					: response
					? "Password is wrong !"
					: "MSSV not found !",
				token: token || null,
				response: token ? response : null,
			})
		} catch (error) {
			reject(error)
		}
	})

export const sendEmailer = ({ email }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findOne({
				where: { email },
				raw: true,
			})
			if (response) {
				const token = jwt.sign(
					{ id: response.email },
					process.env.SECRET_KEY,
					{
						expiresIn: "1h",
					}
				)
				const resetUrl = `${process.env.CLIENT_URL}resetpass?email=${response.email}`
				await mailer.sendEmail(
					response.email,
					"Password Reset Request",
					`
				         <p>You requested a password reset. Click the link below to reset your password:</p>
                     <a href='${resetUrl}'>Reset Paswword</a>`
				)
				resolve({
					err: 0,
					msg: "Email reset password sent",
				})
			} else
				resolve({
					err: 2,
					msg: "The Email is not registered with us",
				})
		} catch (error) {
			reject(error)
		}
	})
export const resetPass = ({ email, newPass }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findOne({
				where: { email },
				raw: true,
			})
			if (response) {
				await db.Sinhvien.update(
					{
						...response,
						matkhau: hashPassword(newPass),
					},
					{ where: { email } }
				)
				resolve({
					err: 0,
					msg: "Password is updated",
				})
			} else
				resolve({
					err: 2,
					msg: "Email not found",
				})
		} catch (error) {
			reject(error)
		}
	})
