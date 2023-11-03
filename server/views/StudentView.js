import StudentController from "../controllers/StudentController.js"

class StudentView {

    static async getAllStudents(req, res) {
        try {
            const results = await StudentController.getAllStudents()
            res.status(200).json(results)
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default StudentView