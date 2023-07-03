import db from "../models"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"
require("dotenv").config()

export const addMHTC = ({
	msmh,
	tenmh,
	mslophoc,
	mshocky,
	mskhoa,
	siso,
	phanTramQT,
	phanTramGK,
	thu,
	tietbd,
	sotiet,
	phong,
	tengiangvien,
	ngaybd,
	ngaykt,
}) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Monhoctochuc.create({
				id: v4(),
				msmh: msmh,
				tenmh,
				mslophoc,
				mshocky,
				mskhoa,
				siso,
				phanTramQT,
				phanTramGK,
				thu,
				tietbd,
				sotiet,
				phong,
				tengiangvien,
				ngaybd,
				ngaykt,
			})
			const token =
				response[1] &&
				jwt.sign(
					{ msmh: response[0].msmh, mslophoc: response[0].mslophoc },
					process.env.SECRET_KEY,
					{
						expiresIn: "2d",
					}
				)
			resolve({
				err: token ? 0 : 2,
				msg: token ? "Add is successfully !" : "Thu has been aldready !",
				token: token || null,
			})
		} catch (error) {
			reject(error)
		}
	})
export const getAll = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Monhoctochuc.findAll({
				raw: true,
				nest: true,
				include: [
					{
						model: db.Monhoc,
						as: "monhocTC",
						attributes: ["sotinchi"],
					},
					{
						model: db.Khoa,
						as: "Khoa",
						attributes: ["tenkhoa"],
					},
				],
			})
			resolve({
				err: response ? 0 : 1,
				msg: response
					? "Get list monhoctochuc ok...!"
					: "Get list monhoctochuc fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const monhoctochucDelete = (msmh) =>
	new Promise(async (resolve, reject) => {
		try {
			const mh = await db.Monhoctochuc.findOne({
				where: { msmh },
			})
			if (mh) {
				await mh.destroy()
				const token =
					mh.destroy() &&
					jwt.sign(
						{ msmh: mh.destroy().msmh, mshocky: mh.destroy().mshocky },
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
					msg: "MSKHOA not found...!",
				})
			}
		} catch (error) {
			reject(error)
		}
	})
