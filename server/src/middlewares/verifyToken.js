import jwt from 'jsonwebtoken'
const veriftToken = (req, res, next) => {
   let accessToken = req.headers.authorization?.split(' ')[1]
   if (!accessToken)
      return res.status(401).json({
         err: 1,
         msg: 'Missing access token...!',
      })
   jwt.verify(accessToken, process.env.SECRET_KEY, (err, decode) => {
      if (err)
         return res.status(401).json({
            err: 1,
            msg: 'Access token expired...!',
         })
      res.sinhvien = decode
      next()
   })
}
export default veriftToken
