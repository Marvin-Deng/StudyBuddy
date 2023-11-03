import { pool } from '../db.js'

const createTutorTableQuery = `
    CREATE TABLE IF NOT EXISTS tutor (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        school VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number INTEGER,
        social_media VARCHAR(255)
    );
`

export const createTutorTable = async () => {
    try {
        await pool.query(createTutorTableQuery)
    }
    catch (err) {
        throw new Error('Failed to create the tutor table: ' + err.message)
    }
}
