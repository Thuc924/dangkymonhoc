import * as hockyService from '../services/hocky'

export const create = async (req, res) => {
   const { mshocky, tenhocky } = req.body
   try {
      if (!mshocky || !tenhocky) {
         return res.status(400).json({
            err: 1,
            msg: 'Missing input...!',
         })
      }
      const response = await hockyService.createHocky(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at hocky controller ' + error,
      })
   }
}
export const getAllHocky = async (req, res) => {
   try {
      const response = await hockyService.getAll()
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: ' Fail of hocky controller' + error,
      })
   }
}
export const deleteHocky = async (req, res) => {
   try {
      const { mshocky } = req.query
      if (mshocky) {
         const response = await hockyService.HockyDelete(mshocky)
         return res.status(200).json(response)
      }
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail of hocky controller ' + error,
      })
   }
}
