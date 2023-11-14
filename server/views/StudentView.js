import StudentController from "../controllers/StudentController.js"

class StudentView {

    static async getOne(req, res) {
        
        try {
            const student_id = parseInt(req.params.student_id)
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

    static async filterStudents(req, res) {
        try {
            const searchString  = req.params.search_string
            if (!searchString) {
                return res.status(400).json({ error: 'search_string is required as a route parameter' })
            }
            const results = await StudentController.filterStudents(searchString)
            res.status(200).json(results)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
    
    static async joinStudyGroup(req, res) {

        try {
            const { studentId, groupId } = req.body;
            const studentIdInt = parseInt(studentId)
            const groupIdInt = parseInt(groupId)
            // console.log("student id",studentIdInt,"groupid",groupIdInt)
            // console.log("student id",typeof(studentIdInt),"groupid",typeof(groupIdInt))
            if (!studentId || !groupId) {
                return res.status(400).json({ error: 'studentId and groupId are required in the request body.' })
            }
            else if (!Number.isInteger(studentIdInt) || !Number.isInteger(groupIdInt)) {
                return res.status(400).json({ error: 'studentId and groupId must be integers.' });
            }

            const results = await StudentController.joinStudyGroup(studentIdInt, groupIdInt)
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