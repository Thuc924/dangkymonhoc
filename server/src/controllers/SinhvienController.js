import * as sinhvienService from '../services/sinhvien'

export const create = async (req, res) => {
   const { mssv, tensv, email, matkhau, diachi, sodienthoai, ngaysinh, noisinh, gioitinh, avatar } = req.body
   try {
      if (!mssv || !tensv || !email || !matkhau || !diachi || !sodienthoai || !ngaysinh || !noisinh || !gioitinh || !avatar) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await sinhvienService.createSinhvien(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at sinhvien controller ' + error,
      })
   }
}
