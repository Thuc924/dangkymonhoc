import db from "../models"
import bcrytp from "bcryptjs"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"
require("dotenv").config()

const hashPassword = (matkhau) =>
	bcrytp.hashSync(matkhau, bcrytp.genSaltSync(12))

export const getAllSinhviens = () =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findAll({
				raw: true,
			})
			resolve({
				err: response ? 0 : 1,
				msg: response
					? "Get list Sinhvien ok...!"
					: "Get list Sinhvien fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const getSinhvienMSSV = ({ mssv }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findOne({
				where: { mssv },
				raw: true,
			})
			resolve({
				err: response ? 0 : 1,
				msg: response ? "Get Sinhvien ok...!" : "Get Sinhvien fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})
export const getLimitSinhvien = (offset) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findAndCountAll({
				raw: true,
				nest: true,
				offset: offset * +process.env.LIMIT || 0,
				limit: +process.env.LIMIT,
			})
			resolve({
				err: response ? 0 : 1,
				msg: response
					? "Get list Sinhvien ok...!"
					: "Get list Sinhvien fail...!",
				response,
			})
		} catch (error) {
			reject(error)
		}
	})

export const createSinhvien = ({
	mssv,
	mslop,
	tensv,
	email,
	matkhau,
	diachi,
	sodienthoai,
	ngaysinh,
	noisinh,
	gioitinh,
	avatar,
}) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findOrCreate({
				where: { mssv },
				defaults: {
					id: v4(),
					mssv,
					mslop,
					tensv,
					email,
					matkhau,
					diachi,
					sodienthoai,
					ngaysinh,
					noisinh,
					gioitinh,
					avatar,
				},
			})
			const token =
				response[1] &&
				jwt.sign(
					{ mssv: response[0].mssv, email: response[0].email },
					process.env.SECRET_KEY,
					{ expiresIn: "2d" }
				)
			resolve({
				err: token ? 0 : 2,
				msg: token
					? "Create is successfully !"
					: "MSSV number has been aldready used !",
				token: token || null,
			})
		} catch (error) {
			reject(error)
		}
	})
export const SinhvienUpdate = ({
	mssv,
	tensv,
	email,
	matkhau,
	diachi,
	sodienthoai,
	ngaysinh,
	noisinh,
	gioitinh,
	mslop,
}) =>
	new Promise(async (resolve, reject) => {
		try {
			const sv = await db.Sinhvien.findOne({ where: { mssv } })
			if (sv) {
				const ss = await db.Sinhvien.update(
					{
						...sv,
						mssv: mssv ? mssv : sv.mssv,
						tensv: tensv ? tensv : sv.tensv,
						email: email ? email : sv.email,
						matkhau: matkhau ? matkhau : sv.matkhau,
						diachi: diachi ? diachi : sv.diachi,
						sodienthoai: sodienthoai ? sodienthoai : sv.sodienthoai,
						ngaysinh: ngaysinh ? ngaysinh : sv.ngaysinh,
						noisinh: noisinh ? noisinh : sv.noisinh,
						gioitinh: gioitinh ? gioitinh : sv.gioitinh,
						mslop: mslop ? mslop : sv.mslop,
					},
					{ where: { mssv } }
				)
				const token =
					ss &&
					jwt.sign({ mssv: mssv, email: email }, process.env.SECRET_KEY, {
						expiresIn: "30m",
					})
				resolve({
					err: 0,
					msg: "Updata success...!",
					token: token || null,
				})
			} else {
				resolve({
					err: 2,
					msg: "SV not found...!",
					token: token || null,
				})
			}
		} catch (error) {
			reject(error)
		}
	})

export const SinhvienDelete = (mssv) =>
	new Promise(async (resolve, reject) => {
		try {
			const sv = await db.Sinhvien.findOne({
				where: { mssv },
			})
			if (sv) {
				await sv.destroy()
				const token =
					sv.destroy() &&
					jwt.sign(
						{ mssv: sv.destroy().mssv, tensv: sv.destroy().tensv },
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
					msg: "MSSV not found...!",
				})
			}
		} catch (error) {
			reject(error)
		}
	})
export const SinhvienEditPass = ({ newPass, mssv }) =>
	new Promise(async (resolve, reject) => {
		try {
			const response = await db.Sinhvien.findOne({
				where: { mssv },
				raw: true,
			})
			if (response) {
				const ss = await db.Sinhvien.update(
					{
						...response,
						matkhau: newPass ? newPass : response.matkhau,
					},
					{ where: { mssv } }
				)

				resolve({
					err: 0,
					msg: "Edit password success...!",
				})
			} else {
				resolve({
					err: 0,
					msg: "Not found Sinhvien...!",
				})
			}
		} catch (error) {
			reject(error)
		}
	})
