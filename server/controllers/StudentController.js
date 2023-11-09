import { pool } from '../config/db.js'

class StudentController {

    static async getOne(id) {
        try {
            const results = await pool.query('SELECT * FROM students WHERE id = $1',[id])
            return results.rows
        }
        catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }
    static async getAllStudents() {
        try {
            const results = await pool.query('SELECT * FROM students')
            return results.rows
        }
        catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }

    static async joinStudyGroup(studentId, groupId) {
        try {
            const query = `
                INSERT INTO student_study_groups (student_id, group_id)
                VALUES ($1, $2);
            `
            const result = await pool.query(query, [studentId, groupId])

            if (result.rowCount === 1) {
                return { success: true, message: 'Student joined the study group.' }
            }
            else {
                return { success: false, message: 'Failed to join the study group.' }
            }
        }
        catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }

    static async leaveStudyGroup(studentId, groupId) {
        try {
            const query = `
                DELETE FROM student_study_groups
                WHERE student_id = $1 AND group_id = $2
            `
            const result = await pool.query(query, [studentId, groupId])

            if (result.rowCount === 1) {
                return { success: true, message: 'Student left the study group.' }
            }
            else {
                return { success: false, message: 'Failed to leave the study group.' }
            }
        }
        catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }
}

export default StudentController