import { pool } from '../config/db.js'

class ClassController {
    static async createClass(name,subject,professor){
        try {
            const query = `
                INSERT INTO classes (name, subject, professor)
                VALUES ($1,$2,$3);
            ` 
            const result = await pool.query(query, [name, subject, professor])

            if (result.rowCount === 1) {
                return { success: true, message: 'Class created.' }
            }
            else {
                return { success: false, message: 'Failed to create the class.' }
            }
        } catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }

    static async getClasses(){
        try {
            const query = "SELECT * FROM classes;"
            const result = await pool.query(query)
            return result.rows
        } catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }
    
    static async getClassByID(class_id){
        try {
            const query = `SELECT * FROM classes where id = $1`
            const results = await pool.query(query,[class_id])
            return results.rows
        } catch (error) {
            return { success: false, message: 'An error occurred: ' + error.message }
        }
    }
}   


export default ClassController