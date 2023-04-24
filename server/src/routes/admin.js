import express from 'express'
import * as adminController from '../controllers/AdminController'
import veriftToken from '../middlewares/verifyToken'
const router = express.Router()

router.get('/', adminController.getOneAdmin)
router.get('/all', adminController.getAllAdmin)
router.get('/getone', adminController.getOneAdminByMSQTV)
router.put('/edit', adminController.editAdmin)
// router.use(veriftToken)

export default router
