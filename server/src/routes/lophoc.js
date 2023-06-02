import express from "express"

import * as lophocController from "../controllers/LophocController"

const router = express.Router()

router.get("/", lophocController.getAllLopHoc)

router.post("/create", lophocController.createLop)
router.delete("/remove", lophocController.deleteLophoc)

export default router
