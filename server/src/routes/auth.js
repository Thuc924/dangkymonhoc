import express from "express"

import * as authController from "../controllers/authController"

const router = express.Router()
router.post("/login", authController.authLogin)
router.post("/loginSinhvien", authController.authLoginSinhvien)
router.post("/password/email", authController.sendResetEmail)
router.post("/password/reset", authController.resetPassword)

export default router
