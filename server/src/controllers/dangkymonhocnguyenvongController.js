import * as dangkymonhocnguyenvongService from "../services/monhocnguyenvong"

export const add = async (req, res) => {
	const { mssv, msmh, hocphi } = req.body
	try {
		if (!mssv || !msmh || !hocphi) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response =
			await dangkymonhocnguyenvongService.addMonhocnguyenvongInDSDKMH({
				mssv,
				msmh,
				hocphi,
			})
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at monhoctochuc controller " + error,
		})
	}
}
export const getAllDSByMSSV = async (req, res) => {
	const { mssv } = req.query
	try {
		if (!mssv) {
			return res.status(400).json({
				err: 1,
				msg: "Missing query MSSV...!",
			})
		}
		const response = await dangkymonhocnguyenvongService.getAllSV({ mssv })
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: " Fail of hocky controller" + error,
		})
	}
}
export const getAll = async (req, res) => {
	try {
		const response = await dangkymonhocnguyenvongService.getAllDS()
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: " Fail of hocky controller" + error,
		})
	}
}
export const deleteMonhocInDSDKMH = async (req, res) => {
	try {
		const { msmh } = req.query
		if (msmh) {
			const response =
				await dangkymonhocnguyenvongService.DeleteMonhocInDSDKMH(msmh)
			return res.status(200).json(response)
		}
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail of hocky controller " + error,
		})
	}
}
