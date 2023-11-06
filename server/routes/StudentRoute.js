import express from 'express'
import StudentView from '../views/StudentView.js'

const router = express.Router()

router.get('/getAll', StudentView.getAllStudents)
router.post('/joinGroup', StudentView.joinStudyGroup)
router.delete('/leaveGroup', StudentView.leaveStudyGroup)

export default router