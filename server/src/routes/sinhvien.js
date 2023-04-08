import express from 'express'
import * as sinhvienController from '../controllers/SinhvienController'
const router = express.Router()

router.post('/create', sinhvienController.create)
router.get('/', sinhvienController.getAllSinhviens)
router.get('/limit', sinhvienController.getSinhviensLitmits)
router.delete('/remove', sinhvienController.deleteSinhvien)

export default router
