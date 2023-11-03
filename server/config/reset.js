import { pool } from './db.js'
import { createStudentTable } from './tables/StudentTable.js'
import { createTutorTable } from './tables/TutorTable.js'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const dropTableIfExists = `
    DROP TABLE IF EXISTS students;
    DROP TABLE IF EXISTS tutors;
`

const deleteTables = async () => {
    await pool.query(dropTableIfExists)
}

const resetDatabase = async () => {
    await deleteTables()
    await createStudentTable()
    await createTutorTable()
  };
  
resetDatabase();