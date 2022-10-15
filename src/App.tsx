import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes'
import { ThemeProvider } from '@mui/material'
import { themeUi } from './theme/themeUi'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  useEffect(() => {
    store.dispatch(verifyToken())
  },[])

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeUi}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
