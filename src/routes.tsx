import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/navBar'
import Dashboard from './pages/dashboard'
import Login from './pages/login'

export default () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<NavBar><Dashboard/></NavBar>}/>
      <Route path="/login" element={<NavBar><Login/></NavBar>} />
    </Routes>

  )
}