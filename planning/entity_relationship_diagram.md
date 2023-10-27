## List of Tables
Student
Tutor
Course
Tutor Groups
Student Courses
Tutor Courses

## Entity Relationship Diagram

![image](https://github.com/Marvin-Deng/TutorMe/assets/52214624/621a719d-55cd-4a0f-a161-468e1a652089)

### Student
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | Primary key |
| name | string | Student name |
| school | string | School the student attends |
| email | string | Student's email |
| social_media | string | Social media link of the student |
| tutor_id | integer | Many to many relationship for one-on-one tutoring |

### Tutor
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | Primary key |
| name | string | Tutor name |
| school | string | School the tutor is affiliated with |
| email | string | Tutor's email |
| social_media | string | Social media link of the tutor |
| student_id | integer | Many to many relationship for one-on-one tutoring |

### Courses
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | Primary key |
| name | string | Name of the course |

### Tutor Groups Join Table
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | Primary key |
| tutor_id | integer | Many to Many (Foreign key referencing tutors) |
| student_id | integer | Many to Many (Foreign key referencing students) |

### Student Courses Join Table
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | Primary key |
| student_id | integer | Many to Many (Foreign key referencing students) |
| course_id | integer | Many to Many (Foreign key referencing courses) |

### Tutor Courses Join Table
| Column Name | Type | Description |
|-------------|------|-------------|
| id | integer | Primary key |
| tutor_id | integer | Many to Many (Foreign key referencing tutors) |
| course_id | integer | Many to Many (Foreign key referencing courses) |


