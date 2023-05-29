import * as authService from "../services/auth"

export const authLogin = async (req, res) => {
	const { msqtv, matkhau } = req.body
	try {
		if (!msqtv || !matkhau) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response = await authService.login(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at sinhvien controller " + error,
		})
	}
}
export const authLoginSinhvien = async (req, res) => {
	const { mssv, matkhau } = req.body
	try {
		if (!mssv || !matkhau) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response = await authService.loginSinhvien(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at sinhvien controller " + error,
		})
	}
}
export const sendResetEmail = async (req, res) => {
	const { email } = req.body
	try {
		if (!email) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response = await authService.sendEmailer(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at auth controller " + error,
		})
	}
}
export const resetPassword = async (req, res) => {
	const { email } = req.query
	const { newPass } = req.body
	try {
		if (!newPass) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response = await authService.resetPass({ email, newPass })
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at sinhvien controller " + error,
		})
	}
}
