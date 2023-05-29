import * as adminService from "../services/admin"

export const getOneAdminByMSQTV = async (req, res) => {
	try {
		const { msqtv } = req.query
		if (msqtv) {
			const response = await adminService.getQTVOneByMSQTV(req.query)
			return res.status(200).json(response)
		}
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at quantrivien controller " + error,
		})
	}
}
export const getAllAdmin = async (req, res) => {
	try {
		const response = await adminService.getQTVAll()
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at quantrivien controller " + error,
		})
	}
}
export const editAdmin = async (req, res) => {
	try {
		const { msqtv, tenqtv, email, matkhau, diachi, sodienthoai } = req.body

		const response = await adminService.AdminUpdate(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail of ADMIN controller " + error,
		})
	}
}
