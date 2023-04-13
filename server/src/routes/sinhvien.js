import express from 'express'
import * as sinhvienController from '../controllers/SinhvienController'
const router = express.Router()

router.post('/create', sinhvienController.create)
router.put('/edit', sinhvienController.updateSinhvien)
router.get('/', sinhvienController.getAllSinhviens)
router.get('/mssv', sinhvienController.getSinhvienByMSSV)
router.get('/limit', sinhvienController.getSinhviensLitmits)
router.delete('/remove', sinhvienController.deleteSinhvien)

export default router
