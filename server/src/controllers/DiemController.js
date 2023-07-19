import * as diemService from '../services/diem'

export const create = async (req, res) => {
   const { mssv, msmh, mshocky, phanTramQT, phanTramGK } = req.body
   try {
      if (!mssv || !msmh || !mshocky || !phanTramQT || !phanTramGK) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await diemService.createDiem(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at diem controller ' + error,
      })
   }
}
export const getAllDiemByMSSV = async (req, res) => {
   const { mssv } = req.query
   try {
      if (mssv) {
         const response = await diemService.getAllDiem(req.query)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of diem controller' + error,
      })
   }
}
export const getAllDiem = async (req, res) => {
   try {
      const response = await diemService.getAllDSDiem()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of diem controller' + error,
      })
   }
}
export const updateDiemMH = async (req, res) => {
   try {
      const response = await diemService.DiemUpdate(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of diem controller ' + error,
      })
   }
}
