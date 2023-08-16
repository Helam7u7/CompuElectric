import viteLogo from '/vite.svg'
// import './App.css'

//Routes
import { Routes,Route } from 'react-router-dom'

//Component
import Home from './pages/home/Home'
import Layout from './components/Layout/Layout'
import Product from './pages/Product/Product'
import Product2 from './pages/Product2/Product2'
import Product3 from './pages/Product3/Product3'
import Auricular from './pages/auriculares/Auricular'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='Product' element={<Product/>}/>
        <Route path='catAuriculares' element={<Auricular/>}/>
        <Route path='Product2' element={<Product2/>}/>
        <Route path='Product3' element={<Product3/>}/>
      </Route>
    </Routes>
  )
}

export default App
