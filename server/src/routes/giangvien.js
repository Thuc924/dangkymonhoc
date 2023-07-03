import express from "express"

import * as giangvienController from "../controllers/GiangvienController"

const router = express.Router()

router.get("/", giangvienController.getAllGiangvien)

router.post("/create", giangvienController.create)
// router.delete('/remove', lopController.deleteLophoc)

export default router
