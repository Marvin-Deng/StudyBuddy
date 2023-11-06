import express from 'express'
import GroupView from '../views/GroupView.js'

const router = express.Router()

router.post('/createGroup', GroupView.createStudyGroup);
router.patch('/updateGroup', GroupView.updateStudyGroup);
router.delete('/deleteGroup', GroupView.deleteStudyGroup);

export default router