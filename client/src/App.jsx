import './App.css'
import { Home, Auth } from './pages'
import Container from './components/Container'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore'

function App() {
  const location = useLocation()
  const { performLoadUser } = useAuthStore()

  useEffect(() => {
    if (location.pathname !== '/auth') performLoadUser()
  }, [location.pathname])

  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App
