import viteLogo from '/vite.svg'
// import './App.css'

//Routes
import { Routes,Route } from 'react-router-dom'

//Component
import Layout from './components/Layout/Layout'
import Home from './pages/home/Home'
import ProductList from './pages/ProductList/ProductList'
import DATA_PRODUCTS from './data/products.json'
import ViewProduct from './components/Product/Product'
import Product from './components/Product/Product'


function NotFound() {
  return <h1>Not fount</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/categoria/:categoria' element={<ProductList data_products={DATA_PRODUCTS}/>}>
          <Route path='/categoria/:categoria/:id' element={<Product data_products={DATA_PRODUCTS}/>}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
