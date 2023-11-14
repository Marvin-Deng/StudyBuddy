import "./App.css";
import { useRoutes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import StudentsPage from "./pages/StudentsPage";
import StudentProfile from "./pages/StudentProfile";
import CreateStudyGroup from "./pages/CreateStudyGroup";
import CreateClass from "./pages/CreateClass";
import ClassesPage from "./pages/ClassesPage";
import StudyGroupsPage from "./pages/StudyGroupsPage";
import JoinGroup from "./pages/JoinGroup";
function App() {
  let subpages = useRoutes([
    {
      path: "/",
      element: <StudyGroupsPage />,
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
      element: <CreateStudyGroup />,
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
