import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes'
import { ThemeProvider } from '@mui/material'
import { themeUi } from './theme/themeUi'

function App() {

  return (
    <ThemeProvider theme={themeUi}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
