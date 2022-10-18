import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes'
import { ThemeProvider } from '@mui/material'
import { themeUi } from './theme/themeUi'
import { Provider } from 'react-redux'
import { store } from './store'
import { verifyToken } from './store/admin/thunks/verifyToken'
import Loading from './components/loading'
import { getUsers } from './store/users/thunks/getUsers'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initial = async() => {
      await store.dispatch(verifyToken())
      await store.dispatch(getUsers())
      setIsLoading(false)
    }
    initial()
  },[])

  return (
    isLoading == true
    ? <Loading/>
    : <Provider store={store}>
        <ThemeProvider theme={themeUi}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
  )
}

export default App
