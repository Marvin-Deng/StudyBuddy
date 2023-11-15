import "./App.css";
import { useRoutes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import StudentsPage from "./pages/StudentsPage";
import StudentProfile from "./pages/StudentProfile";
import CreateGroupPage from "./pages/CreateGroupPage";
import CreateClass from "./pages/CreateClass";
import ClassesPage from "./pages/ClassesPage";
import StudyGroupsPage from "./pages/StudyGroupsPage";
import JoinGroup from "./pages/JoinGroup";
import { CreateStudent } from "./pages/CreateStudent";
import StudyGroupPage from "./pages/StudyGroupPage";

function App() {
  let subpages = useRoutes([
    {
      path: "/",
      element: <StudyGroupsPage />,
    },
    {
      path: '/:id',
      element: <StudyGroupPage/>
    },
    {
      path: "/student/:id",
      element: <StudentProfile />,
    },
    {
      path: "/students",
      element: <StudentsPage />,
    },
    {
      path: "/createGroup",
      element: <CreateGroupPage />,
    },
    {
      path: "/classes",
      element: <ClassesPage />,
    },
    {
      path: "/createClass",
      element: <CreateClass />,
    },
    {
      path: '/joinGroup/:id',
      element: <JoinGroup/>
    },
    {
      path: '/register',
      element: <CreateStudent/>
    }
    
  ]);

  return (
    <>
      <NavbarComponent />
      {subpages}
    </>
  );
}

export default App;
