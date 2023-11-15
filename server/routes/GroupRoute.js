import express from 'express'
import GroupView from '../views/GroupView.js'

const router = express.Router()

router.get('/getAll', GroupView.getStudyGroups);
router.get('/search/:search_string', GroupView.filterGroups)
router.get('/:group_id', GroupView.getStudyGroupById);
router.get('/studentsInGroup/:id',GroupView.getStudentsForGroup)
router.post('/createGroup', GroupView.createStudyGroup);
router.patch('/updateGroup', GroupView.updateStudyGroup);
router.delete('/deleteGroup', GroupView.deleteStudyGroup);


export default router