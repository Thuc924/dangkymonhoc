import db from "../models"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"
require("dotenv").config()

export const createLophoc = ({ mslophoc, tenlophoc, mssv, ngaybd, ngaykt }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Lop.create({
				id: v4(),
				mslophoc,
				tenlophoc,
				mssv,
				ngaybd,
				ngaykt,
			})
			// resolve(response)
			const token =
				response &&
				jwt.sign(
					{
						mslophoc: response.mslophoc,
						tenlophoc: response.tenlophoc,
					},
					process.env.SECRET_KEY,
					{
						expiresIn: "2d",
					}
				)
			resolve({
				err: token ? 0 : 2,
				msg: token ? "Create is successfully !" : "Sinhvien has been  !",
				token: token || null,
			})
		} catch (error) {
			reject(error)
		}
	})
export const getAllLophocs = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Lop.findAll({
				raw: true,
				nest: true,
				include: [
					{
						model: db.Sinhvien,
						as: "sinhvien",
						attributes: ["tensv"],
					},
				],
			})
			resolve({
				err: response ? 0 : 1,
				msg: response
					? "Get list Lophoc ok...!"
					: "Get list Lophoc fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const LophocDelete = (mslop) =>
	new Promise(async (resolve, reject) => {
		try {
			const lop = await db.Lophoc.findOne({
				where: { mslop },
			})
			if (lop) {
				const sv = await db.Sinhvien.findOne({ where: { mslop } })
				if (!sv) {
					await lop.destroy()
					const token =
						lop.destroy() &&
						jwt.sign(
							{
								mslop: lop.destroy().mslop,
								tenlop: lop.destroy().tenlop,
							},
							process.env.SECRET_KEY,
							{
								expiresIn: "2d",
							}
						)
					resolve({
						err: 0,
						msg: "Delete success...!",
						token: token || null,
					})
				} else {
					resolve({
						err: 2,
						msg: "LOP already in model SINHVIEN...!",
					})
				}
			} else {
				resolve({
					err: 2,
					msg: "MSLOP not found...!",
				})
			}
		} catch (error) {
			reject(error)
		}
	})
