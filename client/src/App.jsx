import './App.css'
import { Home, Auth } from './pages'
import Container from './components/Container'
import { Routes, Route} from 'react-router-dom'

function App () {
  return (
    <Routes>
      <Route element={<Container/>}>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default App
