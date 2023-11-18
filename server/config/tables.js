export const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    githubid int NOT NULL,
    username varchar(200) NOT NULL,
    avatarurl varchar(500),
    accesstoken varchar(500) NOT NULL,
    user_type varchar(20) NOT NULL
  );
`;

export const createStudentTableQuery = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    school VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    grad_year VARCHAR(255) NOT NULL,
    major VARCHAR(255),
    phone_number VARCHAR(255),
    social_media VARCHAR(255),
    tutor_group_id int
  );
`;

export const createStudyGroupQuery = `
  CREATE TABLE IF NOT EXISTS study_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    location VARCHAR(255) NOT NULL,
    time VARCHAR(100) NOT NULL,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
  );
`;

export const createStudentStudyGroupQuery = `
  CREATE TABLE IF NOT EXISTS student_study_groups (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    group_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (group_id) REFERENCES study_groups(id) ON DELETE CASCADE
  );
`;

export const createClassTableQuery = `
  CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    professor VARCHAR(100) NOT NULL
  );
`;

export const createStudentClassTableQuery = `
  CREATE TABLE IF NOT EXISTS student_classes (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
  );
`;

export const createTableQueries = [
  createUserTableQuery,
  createStudentTableQuery,
  createClassTableQuery,
  createStudyGroupQuery,
  createStudentStudyGroupQuery,
  createStudentClassTableQuery,
];
