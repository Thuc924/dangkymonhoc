import express from 'express'
import * as monhocController from '../controllers/MonhocController'
const router = express.Router()

router.post('/create', monhocController.create)
router.get('/', monhocController.getAllMonhoc)
router.get('/limit', monhocController.getMonhocLitmits)
router.delete('/remove', monhocController.deleteMonhoc)
router.put('/edit', monhocController.updateMonhoc)

export default router
