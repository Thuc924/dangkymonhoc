import express from "express"
import { verify } from "jsonwebtoken"

import * as dangkymonhocController from "../controllers/dangkymonhocController"

const router = express.Router()

router.get("/", dangkymonhocController.getAll)

router.post("/create", dangkymonhocController.add)
router.delete("/remove", dangkymonhocController.deleteMonhocInDSDKMH)
router.get("/all", dangkymonhocController.getAllDSByMSSV)

export default router
