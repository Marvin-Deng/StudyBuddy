import "./App.css";
import { useRoutes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import StudentsPage from "./pages/StudentsPage";
import StudentProfile from "./pages/StudentProfile";
import CreateStudyGroup from "./pages/CreateStudyGroup";
import CreateClass from "./pages/CreateClass";
import ClassesPage from "./pages/ClassesPage";
import StudyGroupsPage from "./pages/StudyGroupsPage";

function App() {
  let subpages = useRoutes([
    {
      path: "/",
      element: <StudentsPage />,
    },
    {
      path: "/student/:id",
      element: <StudentProfile />,
    },
    {
      path: "/studyGroups",
      element: <StudyGroupsPage />,
    },
    {
      path: "/classes",
      element: <ClassesPage />,
    },
    {
      path: "/studyGroups/createGroup",
      element: <CreateStudyGroup />,
    },
    {
      path: "/classes/createClass",
      element: <CreateClass />,
    },
  ]);

  return (
    <>
      <NavbarComponent />
      {subpages}
    </>
  );
}

export default App;
