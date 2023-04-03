import * as authService from '../services/auth'

export const authLogin = async (req, res) => {
   const { msqtv, matkhau } = req.body
   try {
      if (!msqtv || !matkhau) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await authService.login(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at sinhvien controller ' + error,
      })
   }
}
