import { pool } from "../config/db.js";

class ClassController {
  static async getClassByID(class_id) {
    try {
      const query = `SELECT * FROM classes where id = $1`;
      const results = await pool.query(query, [class_id]);
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async getClasses() {
    try {
      const query = "SELECT * FROM classes;";
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async filterClasses(search_string) {
    try {
      const query = `
      SELECT DISTINCT classes.*
      FROM classes
      WHERE
          (
              SELECT COUNT(*)
              FROM unnest(string_to_array($1, ' ')) AS word
              WHERE
                  to_tsvector('english', classes.name) @@ to_tsquery('english', word)
                  OR to_tsvector('english', classes.subject) @@ to_tsquery('english', word)
                  OR to_tsvector('english', classes.professor) @@ to_tsquery('english', word)
          ) > 0;
       `;
      const results = await pool.query(query, [search_string]);
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async createClass(name, subject, professor) {
    try {
      const query = `
                INSERT INTO classes (name, subject, professor)
                VALUES ($1,$2,$3);
            `;
      const result = await pool.query(query, [name, subject, professor]);

      if (result.rowCount === 1) {
        return { success: true, message: "Class created." };
      } else {
        return { success: false, message: "Failed to create the class." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }
}

export default ClassController;
