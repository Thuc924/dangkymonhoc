import * as monhocService from '../services/monhoc'

export const create = async (req, res) => {
   const { msmh, tenmh, sotinchi, mskhoa } = req.body
   try {
      if (!msmh || !tenmh || !sotinchi || !mskhoa) {
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
         msg: ' Fail of SV controller' + error,
      })
   }
}
