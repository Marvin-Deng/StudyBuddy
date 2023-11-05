const createUserTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        githubid int NOT NULL,
        username varchar(200) NOT NULL,
        avatarurl varchar(500),
        accesstoken varchar(500) NOT NULL,
        user_type varchar(20) NOT NULL
    );
`

const createStudentTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        school VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number INTEGER,
        social_media VARCHAR(255),
        tutor_group_id int,
        FOREIGN KEY (tutor_group_id) REFERENCES tutor_groups(id)
    );
`

const createTutorTableQuery = `
    CREATE TABLE IF NOT EXISTS tutors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        school VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number INTEGER,
        social_media VARCHAR(255)
    );
`

const createTutorGroupQuery = `
    CREATE TABLE IF NOT EXISTS tutor_groups (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        tutor_id INT,       
        FOREIGN KEY (tutor_id) REFERENCES tutors(id) 
    );
`

const createClassTableQuery = `
    CREATE TABLE IF NOT EXISTS classes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        subject VARCHAR(255) NOT NULL
    );
`

const createStudentClassTableQuery = `
    CREATE TABLE IF NOT EXISTS student_classes (
        id SERIAL PRIMARY KEY,
        student_id INT,
        class_id INT,
        FOREIGN KEY (student_id) REFERENCES students(id),
        FOREIGN KEY (class_id) REFERENCES classes(id)
    );
`

const createTutorClassTableQuery = `
    CREATE TABLE IF NOT EXISTS tutor_classes (
        id SERIAL PRIMARY KEY,
        student_id INT,
        class_id INT,
        FOREIGN KEY (student_id) REFERENCES students(id),
        FOREIGN KEY (class_id) REFERENCES classes(id)
    );
`
export const createTableQueries = [
    createUserTableQuery,
    createTutorTableQuery,
    createClassTableQuery,
    createTutorGroupQuery,
    createStudentTableQuery,
    createTutorClassTableQuery,
    createStudentClassTableQuery,
];
