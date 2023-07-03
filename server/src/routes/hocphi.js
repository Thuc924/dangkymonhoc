import express from "express"

import * as hocphiController from "../controllers/HocphiController"

const router = express.Router()

router.get("/", hocphiController.getAllDSHocPhi)

router.post("/create", hocphiController.create)
// router.delete('/remove', lopController.deleteLophoc)

export default router
