import express from 'express'

import * as lopController from '../controllers/LopController'

const router = express.Router()

router.get('/', lopController.getAllLop)

router.post('/create', lopController.create)
router.delete('/remove', lopController.deleteLophoc)

export default router
