import * as giangvienService from '../services/giangvien'

export const create = async (req, res) => {
   const { msgiangvien, tengiangvien, chucvu, mskhoa } = req.body
   try {
      if (!msgiangvien || !tengiangvien || !chucvu || !mskhoa) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await giangvienService.createGiangVien(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at khoa controller ' + error,
      })
   }
}
export const getAllGiangvien = async (req, res) => {
   try {
      const response = await giangvienService.getAllGiangViens()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of SV controller' + error,
      })
   }
}
// export const deleteLophoc = async (req, res) => {
//    try {
//       const { mslop } = req.query
//       if (mslop) {
//          const response = await lopService.LophocDelete(mslop)
//          return res.status(200).json(response)
//       }
//    } catch (error) {
//       return res.status(500).json({
//          err: -1,
//          msg: 'Fail of SV controller ' + error,
//       })
//    }
// }
