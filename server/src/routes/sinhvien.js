import express from "express"
import * as sinhvienController from "../controllers/SinhvienController"
import { verifyTokenSinhvien } from "../middlewares/verifyToken"
const router = express.Router()

// Admin
router.post("/create", sinhvienController.create)
router.put("/edit", sinhvienController.updateSinhvien)
router.get("/", sinhvienController.getAllSinhviens)
router.get("/limit", sinhvienController.getSinhviensLitmits)
router.delete("/remove", sinhvienController.deleteSinhvien)

// User
router.use(verifyTokenSinhvien)
router.get("/mssv", sinhvienController.getSinhvienByMSSV)
router.post("/edit-pass", sinhvienController.editPassWordSinhvien)
export default router
