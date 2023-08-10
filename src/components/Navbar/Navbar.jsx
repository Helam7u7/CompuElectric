import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navBar">
        <div><img src="src/assets/img/logoCompuElectric.png" alt=""/></div>
        <ul className="navBar__list">
          <li>Laptops</li>
          <li>Teclados</li>
          <li>Mouses</li>
          <li>Auriculares</li>
          <li>Otros</li>
        </ul>
        <div className="navBar__search">
          <input type="text" placeholder="Buscar..."/>
          <div className="search__img"><img src="/src/assets/img/search.png" alt=""/></div>
        </div>
        <div className="navBar__menu"><img src="/src/assets/img/menu.png" alt=""/></div>
      </nav>
    {/* Banner */}
      <div className="banner">
      </div>
      
    </>
  )
}

export default Navbar