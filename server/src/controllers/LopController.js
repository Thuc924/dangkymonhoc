import * as lopService from "../services/lop"

export const create = async (req, res) => {
	const { mslop, mskhoa } = req.body
	try {
		if (!mslop || !mskhoa) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response = await lopService.createLop(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at khoa controller " + error,
		})
	}
}
export const getAllLop = async (req, res, next) => {
	try {
		const response = await lopService.getAllLops()
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: " Fail of SV controller" + error,
		})
	}
}
export const deleteLophoc = async (req, res) => {
	try {
		const { mslop } = req.query
		if (mslop) {
			const response = await lopService.LophocDelete(mslop)
			return res.status(200).json(response)
		}
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail of SV controller " + error,
		})
	}
}
