import * as khoaService from '../services/khoa'

export const create = async (req, res) => {
   const { mskhoa, tenkhoa } = req.body
   try {
      if (!mskhoa || !tenkhoa) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await khoaService.createKhoa(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at khoa controller ' + error,
      })
   }
}
export const getAllKhoa = async (req, res, next) => {
   try {
      const response = await khoaService.getAll()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of SV controller' + error,
      })
   }
}
export const deleteKhoa = async (req, res) => {
   try {
      const { mskhoa } = req.query
      if (mskhoa) {
         const response = await khoaService.KhoaDelete(mskhoa)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of SV controller ' + error,
      })
   }
}
