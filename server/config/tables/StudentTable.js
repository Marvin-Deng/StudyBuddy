import { pool } from '../db.js'

const createStudentTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        school VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number INTEGER,
        social_media VARCHAR(255)
    );
`

export const createStudentTable = async () => {
    try {
        await pool.query(createStudentTableQuery)
    }
    catch (err) {
        throw new Error('Failed to create the student table: ' + err.message)
    }
}
