import { pool } from "../config/db.js";

class GroupController {
  static async getStudyGroupById(id) {
    try {
      const results = await pool.query(
        "SELECT * FROM study_groups WHERE id = $1",
        [id]
      );
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async getStudyGroups() {
    try {
      const results = await pool.query("SELECT * FROM study_groups");
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async filterGroups(search_string) {
    try {
      const query = `
        SELECT DISTINCT study_groups.*
        FROM study_groups
        WHERE
          (
            SELECT COUNT(*)
            FROM unnest(string_to_array($1, ' ')) AS word
            WHERE
              to_tsvector('english', study_groups.name) @@ to_tsquery('english', word)
              OR to_tsvector('english', study_groups.location) @@ to_tsquery('english', word)
              OR study_groups.class_id IN (
                SELECT id
                FROM classes
                WHERE to_tsvector('english', name) @@ to_tsquery('english', word)
            )
          ) > 0;
      `;
      const results = await pool.query(query, [search_string]);
      return results.rows;
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async createStudyGroup(name, location, time, description, class_id) {
    try {
      const query = `
        INSERT INTO study_groups (name, description, location, time, class_id)
        VALUES ($1, $2, $3, $4, $5);
      `;
      const result = await pool.query(query, [
        name,
        description,
        location,
        time,
        class_id,
      ]);

      if (result.rowCount === 1) {
        return { success: true, message: "Study group created." };
      } else {
        return { success: false, message: "Failed to create the study group." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async updateStudyGroup(groupId, name, location, time, description) {
    try {
      const query = `
        UPDATE study_groups 
        SET 
          name = COALESCE($2, name),
          location = COALESCE($3, location),
          time = COALESCE($4, time),
          description = COALESCE($5, description)
        WHERE id = $1
        RETURNING *;
      `;
      const result = await pool.query(query, [
        groupId,
        name,
        location,
        time,
        description,
      ]);
      if (result.rowCount === 1) {
        return { success: true, message: "Study group updated." };
      } else {
        return { success: false, message: "Failed to update the study group." };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }

  static async deleteStudyGroup(groupId) {
    try {
      const result = await pool.query(
        `DELETE FROM study_groups WHERE id = $1`,
        [groupId]
      );

      if (result.rowCount === 1) {
        return { success: true, message: "Study group deleted." };
      } else {
        return {
          success: false,
          message: "Study group not found or not deleted.",
        };
      }
    } catch (error) {
      return { success: false, message: "An error occurred: " + error.message };
    }
  }
}

export default GroupController;
