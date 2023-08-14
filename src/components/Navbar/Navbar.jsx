import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div><Link to="/"><img src="/img/svg/logoCompuElectric.png" alt=""/></Link></div>
        <ul className="navBar__list">
          <li><Link to="catLaptop">Laptops</Link></li>
          <li><Link to="catTeclado">Teclados</Link></li>
          <li><Link to='catMouses'>Mouses</Link></li>
          <li><Link to='catAuriculares'>Auriculares</Link></li>
          <li><Link to='catOtros'>Otros</Link></li>
        </ul>
        <div className="navBar__search">
          <input type="text" placeholder="Buscar..."/>
          <div className="search__img"><img src="public/img/svg/search.png" alt=""/></div>
        </div>
        <div className="navBar__menu"><img src="public/img/svg/menu.png" alt=""/></div>
      </nav>
    {/* Banner */}
      <div className="banner">
      </div>
      
    </>
  )
}

export default Navbar