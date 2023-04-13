import * as monhoctochucService from '../services/monhoctochuc'

export const add = async (req, res) => {
   const { msmh, mshocky } = req.body
   try {
      if (!msmh || !mshocky) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await monhoctochucService.addMHTC({ msmh, mshocky })
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at monhoctochuc controller ' + error,
      })
   }
}
export const getAllMonhoctochuc = async (req, res) => {
   try {
      const response = await monhoctochucService.getAll()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of monhoctochuc controller' + error,
      })
   }
}
export const deleteMHTC = async (req, res) => {
   try {
      const { msmh } = req.query
      if (msmh) {
         const response = await monhoctochucService.monhoctochucDelete(msmh)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of SV controller ' + error,
      })
   }
}
