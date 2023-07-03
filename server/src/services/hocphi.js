import db from "../models"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"
require("dotenv").config()

export const createHocphi = ({ mssv, msmh, hocphi }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Hocphi.create({
				id: v4(),
				mssv,
				msmh,
				hocphi,
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
						expiresIn: "2d",
					}
				)
			resolve({
				err: token ? 0 : 2,
				msg: token ? "Create is successfully !" : "Create fail !",
				token: token || null,
			})
		} catch (error) {
			reject(error)
		}
	})
export const getAllHocPhi = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Hocphi.findAll({
				raw: true,
			})
			resolve({
				err: response ? 0 : 1,
				msg: response
					? "Get list Hocphi ok...!"
					: "Get list hocphi fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
// export const LophocDelete = (mslop) =>
// 	new Promise(async (resolve, reject) => {
// 		try {
// 			const lop = await db.Lophoc.findOne({
// 				where: { mslop },
// 			})
// 			if (lop) {
// 				const sv = await db.Sinhvien.findOne({ where: { mslop } })
// 				if (!sv) {
// 					await lop.destroy()
// 					const token =
// 						lop.destroy() &&
// 						jwt.sign(
// 							{
// 								mslop: lop.destroy().mslop,
// 								tenlop: lop.destroy().tenlop,
// 							},
// 							process.env.SECRET_KEY,
// 							{
// 								expiresIn: "2d",
// 							}
// 						)
// 					resolve({
// 						err: 0,
// 						msg: "Delete success...!",
// 						token: token || null,
// 					})
// 				} else {
// 					resolve({
// 						err: 2,
// 						msg: "LOP already in model SINHVIEN...!",
// 					})
// 				}
// 			} else {
// 				resolve({
// 					err: 2,
// 					msg: "MSLOP not found...!",
// 				})
// 			}
// 		} catch (error) {
// 			reject(error)
// 		}
// 	})
