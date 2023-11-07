import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { useRoutes } from 'react-router-dom'
import ViewAllStudents from './pages/ViewAllStudents'
function App() {

  let subpages = useRoutes([
    {
      path: '/',
      element: <ViewAllStudents/>
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
