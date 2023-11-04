import './App.css'
import Navbar from './components/navbar'
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
      <Navbar/>
      {subpages}
    </>
  )
}

export default App
