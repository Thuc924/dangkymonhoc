import * as monhocService from '../services/monhoc'

export const create = async (req, res) => {
   const { msmh, tenmh, sotinchi, mota, mshocky, sotiet, lythuyet, thuchanh, tuhoc } = req.body
   try {
      if (!msmh || !tenmh || !mshocky || !mota || !sotinchi || !sotiet || !lythuyet || !thuchanh || !tuhoc) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await monhocService.createMonhoc(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at monhoc controller ' + error,
      })
   }
}
export const getAllMonhoc = async (req, res) => {
   try {
      const response = await monhocService.getAll()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of MONHOC controller' + error,
      })
   }
}
export const deleteMonhoc = async (req, res) => {
   try {
      const { msmh } = req.query
      if (msmh) {
         const response = await monhocService.MonhocDelete(msmh)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of MONHOC controller ' + error,
      })
   }
}
export const getMonhocLitmits = async (req, res) => {
   const { page } = req.query
   try {
      const response = await monhocService.getLimitMonhoc(page)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of MONHOC controller' + error,
      })
   }
}
export const updateMonhoc = async (req, res) => {
   try {
      const { msmh, tenmh, sotinchi, mota, mshocky, sotiet, lythuyet, thuchanh, tuhoc } = req.body
      if (!msmh || !tenmh || !sotinchi || !mota || !mshocky || !sotiet || !lythuyet || !thuchanh || !tuhoc) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await monhocService.MonhocUpdate(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of SV controller ' + error,
      })
   }
}
