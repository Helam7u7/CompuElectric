import viteLogo from '/vite.svg'
// import './App.css'

//Routes
import { Routes,Route } from 'react-router-dom'

//Component
import Layout from './components/Layout/Layout'
import Home from './pages/home/Home'
import Auricular from './pages/auriculares/Auricular'
import Auricular1 from './pages/auriculares/Auricular1/Auricular1'
import Auricular2 from './pages/auriculares/Auricular2/Auricular2'
import Auricular3 from './pages/auriculares/Auricular3/Auricular3'
import ViewProduct from './components/Product/Product'


function NotFound() {
  return <h1>Not fount</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<ViewProduct/>}/>
        <Route path='catAuriculares' element={<Auricular/>}>
          <Route path='auricular1' element={<Auricular1/>}/>
          <Route path='auricular2' element={<Auricular2/>}/>
          <Route path='auricular3' element={<Auricular3/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
