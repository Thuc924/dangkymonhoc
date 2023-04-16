import express from 'express'

import * as authController from '../controllers/authController'

const router = express.Router()
router.post('/login', authController.authLogin)
router.post('/loginSinhvien', authController.authLoginSinhvien)

export default router
