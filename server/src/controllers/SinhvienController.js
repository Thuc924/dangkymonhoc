import * as sinhvienService from '../services/sinhvien'

export const create = async (req, res) => {
   const {
      mssv,
      mslop,
      tensv,
      email,
      matkhau,
      diachi,
      sodienthoai,
      ngaysinh,
      noisinh,
      gioitinh,
      avatar,
   } = req.body
   try {
      if (
         !mssv ||
         !mslop ||
         !tensv ||
         !email ||
         !matkhau ||
         !diachi ||
         !sodienthoai ||
         !ngaysinh ||
         !noisinh ||
         !gioitinh ||
         !avatar
      ) {
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
export const getAllSinhviens = async (req, res, next) => {
   try {
      const response = await sinhvienService.getAllSinhviens()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of SV controller' + error,
      })
   }
}
export const getSinhviensLitmits = async (req, res) => {
   const { page } = req.query
   try {
      const response = await sinhvienService.getLimitSinhvien(page)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of SV controller' + error,
      })
   }
}
export const getSinhvienByMSSV = async (req, res) => {
   const { mssv } = req.query
   try {
      if (mssv) {
         const response = await sinhvienService.getSinhvienMSSV(mssv)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of SV controller' + error,
      })
   }
}
export const deleteSinhvien = async (req, res) => {
   try {
      const { mssv } = req.query
      if (mssv) {
         const response = await sinhvienService.SinhvienDelete(mssv)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of SV controller ' + error,
      })
   }
}
export const updateSinhvien = async (req, res) => {
   try {
      const {
         mssv,
         tensv,
         email,
         matkhau,
         diachi,
         sodienthoai,
         ngaysinh,
         noisinh,
         gioitinh,
         mslop,
      } = req.body
      if (
         !mssv ||
         !tensv ||
         !email ||
         !matkhau ||
         !diachi ||
         !sodienthoai ||
         !ngaysinh ||
         !noisinh ||
         !gioitinh ||
         !mslop
      ) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await sinhvienService.SinhvienUpdate(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of SV controller ' + error,
      })
   }
}
