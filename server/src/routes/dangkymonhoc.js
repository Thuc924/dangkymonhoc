import express from 'express'

import * as dangkymonhocController from '../controllers/dangkymonhocController'

const router = express.Router()

router.get('/', dangkymonhocController.getAllDSDKMH)

router.post('/create', dangkymonhocController.add)
router.delete('/remove', dangkymonhocController.deleteMonhocInDSDKMH)
router.get('/all', dangkymonhocController.getAll)

export default router
