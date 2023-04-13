import express from 'express'

import * as monhoctochucController from '../controllers/MonhoctochucController'

const router = express.Router()

router.get('/', monhoctochucController.getAllMonhoctochuc)

router.post('/add', monhoctochucController.add)
router.delete('/remove', monhoctochucController.deleteMHTC)

export default router
