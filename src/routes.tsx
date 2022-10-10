import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/navBar'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Registration from './pages/registration'
import Stats from './pages/stats'

export default () => {
  const location = useLocation()
  const [positionSelected, setPositionSelected] = useState('125px')

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={
        <NavBar positionSelected={positionSelected}>
          <Dashboard setPositionSelected={setPositionSelected}/>
        </NavBar>
      }/>

      <Route path="/registration" element={
        <NavBar positionSelected={positionSelected}>
          <Registration setPositionSelected={setPositionSelected}/>
        </NavBar>} />

      <Route path="/stats" element={
        <NavBar positionSelected={positionSelected}>
          <Stats setPositionSelected={setPositionSelected}/>
        </NavBar>
      } />

      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}