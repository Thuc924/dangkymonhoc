import db from "../models"
import jwt from "jsonwebtoken"

export const getQTVOneByMSQTV = ({ msqtv }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Quantrivien.findOne({
				where: { msqtv },
				raw: true,
			})
			const token =
				response &&
				jwt.sign(
					{ msqtv: response.msqtv, email: response.email },
					process.env.SECRET_KEY,
					{ expiresIn: "2d" }
				)

			resolve({
				err: response ? 0 : 1,
				msg: response ? "Get admin ok...!" : "Get admin fail...!",
				token: token || null,
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const getQTVAll = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Quantrivien.findAll({
				raw: true,
			})
			resolve({
				err: response ? 0 : 1,
				msg: response ? "Get admin ok...!" : "Get admin fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const AdminUpdate = ({
	msqtv,
	tenqtv,
	email,
	matkhau,
	diachi,
	sodienthoai,
}) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = db.Quantrivien.findOne({
				where: { msqtv },
				raw: true,
			})
			if (response) {
				const res = db.Quantrivien.update(
					{
						tenqtv: tenqtv ? tenqtv : response.tenqtv,
						email: email ? email : response.email,
						matkhau: matkhau ? matkhau : response.matkhau,
						diachi: diachi ? diachi : response.diachi,
						sodienthoai: sodienthoai ? sodienthoai : response.sodienthoai,
					},
					{ where: { msqtv } }
				)
				const token =
					res &&
					jwt.sign(
						{ tenqtv: response.tenqtv, email: response.email },
						process.env.SECRET_KEY,
						{ expiresIn: "2d" }
					)
				resolve({
					err: 0,
					msg: "Updata success...!",
					token: token || null,
				})
			} else {
				resolve({
					err: 2,
					msg: "QTV not found...!",
				})
			}
		} catch (error) {
			reject(error)
		}
	})
