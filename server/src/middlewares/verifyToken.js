import jwt from "jsonwebtoken"
export const verifyTokenSinhvien = (req, res, next) => {
	let accessToken = req.headers.authorization?.split(" ")[1]
	if (!accessToken)
		return res.status(401).json({
			err: 1,
			msg: "Missing access token...!",
		})
	jwt.verify(accessToken, process.env.SECRET_KEY, (err, sinhvien) => {
		if (err)
			return res.status(401).json({
				err: 1,
				msg: "Access token expired...!",
			})
		req.sinhvien = sinhvien
		console.log(sinhvien)
		next()
	})
}
// export const verifyTokenAdmin = (req, res, next) => {
// 	let accessToken = req.headers.authorization?.split(" ")[1]
// 	console.log(accessToken)
// 	if (!accessToken)
// 		return res.status(401).json({
// 			err: 1,
// 			msg: "Missing access token...!",
// 		})
// 	jwt.verify(accessToken, process.env.SECRET_KEY, (err, admin) => {
// 		if (err)
// 			return res.status(401).json({
// 				err: 1,
// 				msg: "Access token expired...!",
// 			})
// 		req.admin = admin
// 		next()
// 	})
// }
