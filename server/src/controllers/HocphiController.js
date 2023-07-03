import * as hocphiService from "../services/hocphi"

export const create = async (req, res) => {
	const { mssv, msmh, hocphi } = req.body
	try {
		if (!mssv || !msmh || !hocphi) {
			return res.status(400).json({
				err: 1,
				msg: "Missing input...!",
			})
		}
		const response = await hocphiService.createHocphi(req.body)
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: "Fail at hocphi controller " + error,
		})
	}
}
export const getAllDSHocPhi = async (req, res) => {
	try {
		const response = await hocphiService.getAllHocPhi()
		return res.status(200).json(response)
	} catch (error) {
		return res.status(500).json({
			err: -1,
			msg: " Fail of SV controller" + error,
		})
	}
}
// export const deleteLophoc = async (req, res) => {
//    try {
//       const { mslop } = req.query
//       if (mslop) {
//          const response = await lopService.LophocDelete(mslop)
//          return res.status(200).json(response)
//       }
//    } catch (error) {
//       return res.status(500).json({
//          err: -1,
//          msg: 'Fail of SV controller ' + error,
//       })
//    }
// }
