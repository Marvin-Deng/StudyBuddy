import express from 'express'
import StudentView from '../views/StudentView.js'

const router = express.Router()

router.get('/getAll', (req, res) => {
    StudentView.getAllStudents(req, res)
});

export default router