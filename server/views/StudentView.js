import StudentController from "../controllers/StudentController.js"

class StudentView {

    static async getOne(req, res) {
        const student_id = parseInt(req.params.student_id)
        try {
            const results = await StudentController.getOne(student_id)
            res.status(200).json(results)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async getAllStudents(req, res) {
        try {
            const results = await StudentController.getAllStudents()
            res.status(200).json(results)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async joinStudyGroup(req, res) {
        try {
            const { studentId, groupId } = req.body;

            if (!studentId || !groupId) {
                return res.status(400).json({ error: 'studentId and groupId are required in the request body.' })
            }
            else if (!Number.isInteger(studentId) || !Number.isInteger(groupId)) {
                return res.status(400).json({ error: 'studentId and groupId must be integers.' });
            }

            const results = await StudentController.joinStudyGroup(studentId, studyGroupId)
            res.status(200).json(results)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async leaveStudyGroup(req, res) {
        try {
            const { studentId, groupId } = req.body;

            if (!studentId || !groupId) {
                return res.status(400).json({ error: 'studentId and groupId are required in the request body.' })
            }
            else if (!Number.isInteger(studentId) || !Number.isInteger(groupId)) {
                return res.status(400).json({ error: 'studentId and groupId must be integers.' });
            }

            const results = await StudentController.leaveStudyGroup(studentId, groupId)
            res.status(200).json(results)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default StudentView