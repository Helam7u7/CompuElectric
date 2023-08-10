import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navBar">
        <div><img src="src/assets/img/logoCompuElectric.png" alt=""/></div>
        <ul class="navBar__list">
          <li>Laptops</li>
          <li>Teclados</li>
          <li>Mouses</li>
          <li>Auriculares</li>
          <li>Otros</li>
        </ul>
        <div class="navBar__search">
          <input type="text" placeholder="Buscar..."/>
          <div class="search__img"><img src="src/assets/img/search.png" alt=""/></div>
        </div>
        <div class="navBar__menu"><img src="src/assets/img/menu.png" alt=""/></div>
      </nav>
    {/* Banner */}
      <div class="banner">
      </div>
      
    </>
  )
}

export default Navbar