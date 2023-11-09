import express from 'express'
import ClassView from '../views/ClassView.js'

const router = express.Router()

router.get('/getAll',ClassView.getClasses)
router.post('/createClass',ClassView.createClass)

export default router