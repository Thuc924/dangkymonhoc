import db from '../models'

export const getQTVOne = ({ msqtv }) =>
   new Promise(async (resolve, reject) => {
      try {
         const response = await db.Quantrivien.findOne({
            raw: true,
            where: { msqtv },
         })
         resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get admin ok...!' : 'Get admin fail...!',
            response,
         })
      } catch (error) {
         reject(error)
      }
   })
