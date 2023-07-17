import * as diemService from '../services/diem'

export const create = async (req, res) => {
   const { mssv, msmh, diemthi } = req.body
   try {
      if (!mssv || !msmh || !diemthi) {
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
         msg: 'Fail at khoa controller ' + error,
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
         msg: ' Fail of SV controller' + error,
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
