import * as lophocService from "../services/lophoc"

export const createLop = async (req, res) => {
	const { mslophoc, tenlophoc, mssv, ngaybd, ngaykt } = req.body
	try {
		// if (!mslophoc || !tenlophoc || !mssv || !ngaybd || ngaykt) {
		// 	return res.status(400).json({
		// 		err: 1,
		// 		msg: "Missing input...!",
		// 	})
		// }
		const response = await lophocService.createLophoc(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at khoa controller " + error,
		})
	}
}
export const getAllLopHoc = async (req, res, next) => {
	try {
		const response = await lophocService.getAllLophocs()
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
			const response = await lophocService.LophocDelete(mslop)
			return res.status(200).json(response)
		}
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail of SV controller " + error,
		})
	}
}
