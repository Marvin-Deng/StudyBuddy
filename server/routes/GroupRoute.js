import express from 'express'
import GroupView from '../views/GroupView.js'

const router = express.Router()

router.get('/getAll', GroupView.getStudyGroups);
router.get('/:group_id', GroupView.getStudyGroupById);
router.post('/createGroup', GroupView.createStudyGroup);
router.patch('/updateGroup', GroupView.updateStudyGroup);
router.delete('/deleteGroup', GroupView.deleteStudyGroup);

export default router