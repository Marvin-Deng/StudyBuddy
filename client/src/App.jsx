import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { useRoutes } from 'react-router-dom'
import ViewAllStudents from './pages/ViewAllStudents'
import StudentProfile from './pages/StudentProfile'
import CreateStudyGroup from './pages/CreateStudyGroup'
import CreateClass from './pages/CreateClass'
import Classes from './pages/Classes'
import StudyGroups from './pages/StudyGroups'
function App() {

  let subpages = useRoutes([
    {
      path: '/',
      element: <ViewAllStudents/>
    },
    {
      path: '/student/:id',
      element: <StudentProfile/>
    },
    {
      path: '/studyGroups',
      element: <StudyGroups/>
    },
    {
      path: '/classes',
      element: <Classes/>
    },
    {
      path: '/studyGroups/createGroup',
      element: <CreateStudyGroup/>
    },
    {
      path: '/classes/createClass',
      element: <CreateClass/>
    }
    
  ])

  return (
    <>
      <NavbarComponent/>
      {subpages}
    </>
  )
}

export default App
