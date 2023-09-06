import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import DATA_PRODUCTS from '../../data/products.json'

const Layout = () => {
  return (
    <>
      <Navbar data_products = {DATA_PRODUCTS}/>
      <Outlet/>
      <Footer/>
    </>
    )
}

export default Layout