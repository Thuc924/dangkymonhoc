import express from 'express'

import * as diemController from '../controllers/DiemController'

const router = express.Router()

router.get('/mssv', diemController.getAllDiemByMSSV)
router.get('/', diemController.getAllDiem)

router.post('/create', diemController.create)
router.put('/edit', diemController.updateDiemMH)

// router.delete('/remove', lopController.deleteLophoc)

export default router
