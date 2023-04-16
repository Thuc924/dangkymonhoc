import express from 'express'
import * as adminController from '../controllers/AdminController'
import veriftToken from '../middlewares/verifyToken'
const router = express.Router()

router.use(veriftToken)
router.get('/', adminController.getOneAdmin)
router.get('/', adminController.getOneAdmin)

export default router
