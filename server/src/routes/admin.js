import express from 'express'
import * as adminController from '../controllers/AdminController'
const router = express.Router()

router.get('/', adminController.getOneAdmin)
router.get('/', adminController.getOneAdmin)

export default router
