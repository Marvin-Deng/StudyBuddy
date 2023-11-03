import { pool } from '../config/db.js';

class StudentController {

    static async getAllStudents() {
        try {
            const results = await pool.query('SELECT * FROM students')
            return results.rows
        }
        catch (error) {
            throw error
        }
    }
}

export default StudentController