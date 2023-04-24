import * as adminService from '../services/admin'

export const getOneAdmin = async (req, res) => {
   try {
      const response = await adminService.getQTVOne(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at quantrivien controller ' + error,
      })
   }
}
export const getOneAdminByMSQTV = async (req, res) => {
   const { msqtv } = req.query
   try {
      const response = await adminService.getQTVOneByMSQTV(req.query)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at quantrivien controller ' + error,
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
         msg: 'Fail at quantrivien controller ' + error,
      })
   }
}
export const editAdmin = async (req, res) => {
   try {
      const { msqtv, tenqtv, email, matkhau, diachi, sodienthoai } = req.body
      if (!msqtv || !tenqtv || !email || !matkhau || !diachi || !sodienthoai) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await adminService.AdminUpdate(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of ADMIN controller ' + error,
      })
   }
}
