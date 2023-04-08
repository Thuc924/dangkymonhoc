import express from 'express'
import * as monhocController from '../controllers/MonhocController'
const router = express.Router()

router.post('/create', monhocController.create)
router.get('/', monhocController.getAllMonhoc)
// router.get('/limit', sinhvienController.getSinhviensLitmits)
// router.delete('/delete', sinhvienController.deleteSinhvien)

export default router
