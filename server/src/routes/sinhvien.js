import express from 'express'
import * as sinhvienController from '../controllers/SinhvienController'
const router = express.Router()

router.post('/create', sinhvienController.create)

export default router
