import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { useRoutes } from 'react-router-dom'
import ViewAllStudents from './pages/ViewAllStudents'
import StudentProfile from './pages/StudentProfile'
function App() {

  let subpages = useRoutes([
    {
      path: '/',
      element: <ViewAllStudents/>
    },
    {
      path: '/student/:id',
      element: <StudentProfile/>
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
