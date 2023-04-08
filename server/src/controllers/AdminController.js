import * as adminService from '../services/admin'

export const getOneAdmin = async (req, res) => {
   try {
      const response = await adminService.getQTVOne(req.body)
      return res.status(200).json(response)
   } catch (error) {
      return res.status(500).json({
         err: -1,
         msg: 'Fail at quantrivien controller ' + error,
      })
   }
}
