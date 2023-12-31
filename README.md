# StudyBuddy
CodePath WEB103 Final Project

Designed and developed by: Patrick Biedermann and Marvin Deng

🔗 [Link to deployed app](https://study-buddy-codepath.up.railway.app)

## About

### Description and Purpose
StudyBuddy is a web app that connects students to other students taking the same classes, allowing users to form study groups with other students.

### Inspiration
Many university students struggle with their classes but don't know who to ask. StudyBuddy would streamline the process of connecting struggling students with other students.

## Frontend
- React.js
- Bootstrap
- Javascript

## Backend
- Express
- PostgreSQL
- Javascript

## Features

### Searching for study groups
![group_search](https://github.com/Marvin-Deng/TutorMe/assets/52214624/ea6794aa-ff40-422f-8474-1a0c0524ee6d)

### Searching for students
![student_search](https://github.com/Marvin-Deng/TutorMe/assets/52214624/ed730d8d-bfda-4a16-825a-90bf90cd885d)

### Searching for classes
![class_search](https://github.com/Marvin-Deng/TutorMe/assets/52214624/f93686ea-b568-4fd4-be92-3ebe4cd793d5)

### Profile of students ✅
- Students have a profile page information about them
![personal_profile](https://github.com/Marvin-Deng/TutorMe/assets/41402962/6d52ada2-9dff-4cda-ad1b-8438260f22d9)

### Summary of students ✅
- Displays all students who are on the website
![view_all_students](https://github.com/Marvin-Deng/TutorMe/assets/41402962/8fd12550-c0fc-44d6-b266-bd9dc86e2018)


### Students can view classes ✅
- Students can view all of the available classes
![view_all_classes](https://github.com/Marvin-Deng/TutorMe/assets/41402962/af3d266c-e4ea-4a26-82bd-8be1e549e508)


### Students can create classes  ✅
- Students will add classes with the information such as the name and the professor of the class
![create_class](https://github.com/Marvin-Deng/TutorMe/assets/41402962/11e1b1a3-a255-4472-9c33-e36db7c393c9)


### Students can create student groups  ✅
- Students will create groups Students can view, join, or leave any open groups. Each group will be linked to one existing class.
![create_studygroup](https://github.com/Marvin-Deng/TutorMe/assets/41402962/089358d9-cb10-48cb-8172-08999c054da6)


### Students can edit and delete student groups []
- Students can edit or delete existing study groups
![group_delete](https://github.com/Marvin-Deng/TutorMe/assets/41402962/63297104-be81-4f8a-a473-40089fc63a50)

### Students can join or leave study groups []
- Students can choose to either choose an existing user to join/leave a group or be redirected to a new page where they can create a user and then add/leave him from the group
![join_leave_group](https://github.com/Marvin-Deng/TutorMe/assets/41402962/d356bb0d-dbd0-4b3c-9d55-81727d7bd97d)

## Installation Instructions

Clone the repository:

```
git clone https://github.com/Marvin-Deng/TutorMe.git
```

Setup a [Railway](https://railway.app/) Postgres database. Create a .env based on the template and fill in the service variables fom your Postgres database

```
cp .env.TEMPLATE .env
```

Backend Setup:
- Enter the server directory, install dependencies, and set up the database schema:
  
```
cd server
npm install
npm run reset
```

To start the development server, run 

```
npm start
```

Frontend setup:
- Enter the client directory and install dependencies

```
cd client
npm install
```

Add a .env in the root of the client directory. For development, set the VITE_API_BASE_URL to http://localhost:3001. For deployment, change it to the deployed URL of the backend.

```
# /client/.env
VITE_API_BASE_URL = http://localhost:3001
```

To run the React app, run the following command in the client directory. This is scripted to automatically run the development server as well, so theres no need to start the server beforehand.

```
npm run dev
```


