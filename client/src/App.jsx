import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
function App() {

  let subpages = useRoutes([
    {
      path: '/',
      element: <Home/>
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
