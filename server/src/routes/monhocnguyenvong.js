import express from "express"
import { verify } from "jsonwebtoken"

import * as dangkymonhocnguyenvongController from "../controllers/dangkymonhocnguyenvongController"

const router = express.Router()

router.get("/", dangkymonhocnguyenvongController.getAll)

router.post("/create", dangkymonhocnguyenvongController.add)
router.delete("/remove", dangkymonhocnguyenvongController.deleteMonhocInDSDKMH)
router.get("/all", dangkymonhocnguyenvongController.getAllDSByMSSV)

export default router
