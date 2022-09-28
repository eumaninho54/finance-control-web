import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Login from './pages/login'

export default () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>} />
    </Routes>

  )
}