import express from 'express'

import * as khoaController from '../controllers/KhoaController'

const router = express.Router()

router.get('/', khoaController.getAllKhoa)

router.post('/create', khoaController.create)
router.delete('/remove', khoaController.deleteKhoa)

export default router
