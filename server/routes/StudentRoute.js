import express from 'express'
import StudentView from '../views/StudentView.js'

const router = express.Router()

router.get('/getAll', StudentView.getAllStudents)
router.get('/search/:search_string', StudentView.filterStudents)
router.get('/:student_id',StudentView.getOne)
router.post('/joinGroup', StudentView.joinStudyGroup)
router.delete('/leaveGroup', StudentView.leaveStudyGroup)

export default router