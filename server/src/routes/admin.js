import express from "express"
import * as adminController from "../controllers/AdminController"
const router = express.Router()

router.get("/", adminController.getAllAdmin)
router.put("/edit", adminController.editAdmin)
router.get("/getone", adminController.getOneAdminByMSQTV)

export default router
