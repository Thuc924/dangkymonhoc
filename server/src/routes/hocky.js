import express from 'express'

import * as hockyController from '../controllers/HockyController'

const router = express.Router()

router.get('/', hockyController.getAllHocky)

router.post('/create', hockyController.create)
router.delete('/remove', hockyController.deleteHocky)

export default router
