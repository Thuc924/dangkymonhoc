import * as dangkymonhocService from '../services/dangkymonhoc'

export const add = async (req, res) => {
   try {
      const response = await dangkymonhocService.addMonhocInDSDKMH(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at dangkymonhoc controller ' + error,
      })
   }
}
export const getAllDSByMSSV = async (req, res) => {
   const { mssv } = req.query
   try {
      if (!mssv) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing query MSSV...!',
         })
      }
      const response = await dangkymonhocService.getAllSV({ mssv })
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of dangkymonhoc controller' + error,
      })
   }
}
export const getAll = async (req, res) => {
   try {
      const response = await dangkymonhocService.getAllDS()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of dangkymonhoc controller' + error,
      })
   }
}
export const deleteMonhocInDSDKMH = async (req, res) => {
   try {
      const { msmh } = req.query
      if (msmh) {
         const response = await dangkymonhocService.DeleteMonhocInDSDKMH(req.query)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of dangkymonhoc controller ' + error,
      })
   }
}
export const deleteMonhocInDSDKMHByMSSV = async (req, res) => {
   try {
      const { mssv, msmh } = req.query
      const response = await dangkymonhocService.DeleteMonhocInDSDKMHByMSSV(req.query)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of dangkymonhoc controller ' + error,
      })
   }
}
