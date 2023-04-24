import express from 'express'

import * as authController from '../controllers/authController'
import veriftToken from '../middlewares/verifyToken'

const router = express.Router()
router.post('/login', authController.authLogin)
router.post('/loginSinhvien', authController.authLoginSinhvien)
router.use(veriftToken)

export default router
