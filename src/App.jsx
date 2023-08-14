import viteLogo from '/vite.svg'
// import './App.css'

//Routes
import { Routes,Route } from 'react-router-dom'

//Component
import Home from './pages/home/Home'
import Layout from './components/Layout/Layout'
import Galery from './pages/galeryImg/Galery'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='catTeclado' element={<Galery/>}/>
        
      </Route>
    </Routes>
  )
}

export default App
