import { pool } from "./db.js";
import { createTableQueries } from "./tables.js";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const dropTableIfExists = `
  DROP TABLE IF EXISTS student_study_groups;
  DROP TABLE IF EXISTS study_groups;
  DROP TABLE IF EXISTS student_classes;
  DROP TABLE IF EXISTS students;
  DROP TABLE IF EXISTS classes;
  DROP TABLE IF EXISTS users;
`;

const deleteTables = async () => {
  await pool.query(dropTableIfExists);
};

export const executeQuery = async (query) => {
  try {
    await pool.query(query);
  } catch (err) {
    throw new Error("Failed to create the table: " + err.message);
  }
};

const resetDatabase = async () => {
  await deleteTables();

  for (const query of createTableQueries) {
    try {
      await executeQuery(query);
    } catch (err) {
      throw new Error("Query execution failed: " + err.message);
    }
  }
};

resetDatabase();
