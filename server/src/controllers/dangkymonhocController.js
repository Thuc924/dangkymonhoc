import * as dangkymonhocService from '../services/dangkymonhoc'

export const add = async (req, res) => {
   const { mssv, msmh, hocphi } = req.body
   try {
      if (!mssv || !msmh || !hocphi) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await dangkymonhocService.addMonhocInDSDKMH(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at hocky controller ' + error,
      })
   }
}
export const getAllDSDKMH = async (req, res) => {
   try {
      const { mssv } = req.query
      const response = await dangkymonhocService.getAllDS(mssv)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of hocky controller' + error,
      })
   }
}
export const getAll = async (req, res) => {
   try {
      const response = await dangkymonhocService.getAllSV()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of hocky controller' + error,
      })
   }
}
export const deleteMonhocInDSDKMH = async (req, res) => {
   try {
      const { msmh } = req.query
      if (msmh) {
         const response = await dangkymonhocService.DeleteMonhocInDSDKMH(msmh)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of hocky controller ' + error,
      })
   }
}
