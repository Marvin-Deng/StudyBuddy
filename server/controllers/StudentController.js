import { pool } from "../config/db.js";

class StudentController {
  static async createStudent(name, school, email, grad_year, major, phone_number){
    try {
      const results = await pool.query("INSERT INTO STUDENTS (name, school, email, grad_year, major, phone_number) values ($1, $2, $3, $4, $5, $6);", [name, school, email, grad_year, major, phone_number])
      return results.rows
    }  catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }
  static async getOne(id) {
    try {
      const results = await pool.query("SELECT * FROM students WHERE id = $1", [
        id,
      ]);
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async getAllStudents() {
    try {
      const results = await pool.query("SELECT * FROM students");
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async filterStudents(searchString) {
    try {
      const query = `
      SELECT DISTINCT students.*
      FROM students
      WHERE
          (
              SELECT COUNT(*)
              FROM unnest(string_to_array($1, ' ')) AS word
              WHERE
                  to_tsvector('english', students.name) @@ to_tsquery('english', word)
                  OR to_tsvector('english', students.school) @@ to_tsquery('english', word)
                  OR to_tsvector('english', students.major) @@ to_tsquery('english', word)
                  OR students.id IN (
                      SELECT student_id
                      FROM student_classes
                      WHERE class_id IN (
                          SELECT id
                          FROM classes
                          WHERE to_tsvector('english', name) @@ to_tsquery('english', word)
                          OR to_tsvector('english', subject) @@ to_tsquery('english', word)
                      )
                  )
          ) > 0;
        `;
      const results = await pool.query(query, [searchString]);
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }
  static async updateClass(classId, name, subject, professor) {
    try {
      const query = `
        UPDATE classes 
        SET 
          name = COALESCE($2, name),
          subject = COALESCE($3, subject),
          professor = COALESCE($4, professor),
        WHERE id = $1
        RETURNING *;
      `;
      const result = await pool.query(query, [
        classId,
        name,
        subject,
        professor,
      ]);
      if (result.rowCount === 1) {
        return { success: true, message: "Class updated." };
      } else {
        return { success: false, message: "Failed to update the class." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }
  static async joinStudyGroup(student_id, group_id) {
    try {
      const existsQuery = `SELECT EXISTS(SELECT 1 FROM student_study_groups where student_id=$1 AND group_id=$2)`
      const exists = await pool.query(existsQuery,[student_id,group_id])
      if(exists.rows[0].exists == true){
        // console.log('exists')
        return {success: false, message: "This user already belongs to this study group"}
      } 
      
      const query = `
                INSERT INTO student_study_groups (student_id, group_id)
                VALUES ($1, $2);
            `;
      const result = await pool.query(query, [student_id, group_id]);

      if (result.rowCount === 1) {
        return { success: true, message: "Student joined the study group." };
      } else {
        return { success: false, message: "Failed to join the study group." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async leaveStudyGroup(student_id, group_id) {
    try {
      const query = `
                DELETE FROM student_study_groups
                WHERE student_id = $1 AND group_id = $2
            `;
      const result = await pool.query(query, [student_id, group_id]);

      if (result.rowCount === 1) {
        return { success: true, message: "Student left the study group." };
      } else {
        return { success: false, message: "Failed to leave the study group." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }
}

export default StudentController;
