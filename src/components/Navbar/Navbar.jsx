import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

  const [dropDownOpen, setdropDownOpen] = useState(false);

  const toggleDropDown = () => {
    setdropDownOpen(!dropDownOpen)
  }

  useEffect(() => {
    const handleClickOutSide = (event)=>{
      if (event.target.closest('.navBar__menu') === null) {
        setdropDownOpen(false)
      }
    }

    document.addEventListener('click',handleClickOutSide)

    return () => {
      document.removeEventListener('click',handleClickOutSide)
    };
  }, []);

  const [isFocusNav, setIsFocusNav] = useState(false);
  const toggleFocusNav = () => {
    setIsFocusNav(!setIsFocusNav)
  }

  useEffect(()=> {
    const handleFocusNav = (event)=> {
      if (event.target.closest('.navAnimation__ul') === null){
        setIsFocusNav(false)
        console.log('funciona');
      }
    }
    document.addEventListener('focus',handleFocusNav)

    return () => {
      document.removeEventListener('focus',handleFocusNav)
    };
  },[])

  return (
    <>
      <div className='container_marca'>
        <span className='marca_btn'>
          <h2 className='btn_name'>HOME</h2>
          <div className='btn_img'><img src="/img/svg/home.png" alt="" /></div>
        </span>
        <span className='marca_name'>
          <h1 className='name_title'>Compu Electric</h1>
          <h2 className='name_subTitle'>POR TODO PERÚ</h2>
        </span>
        <span className='marca_phone'>
          <img src="/img/svg/icons8-facebook-48.png" alt="" />
          <img src="/img/svg/phone.png" alt="" />
          <h3>987-774-872</h3>
        </span>
      </div>

      {/* Banner */}
      <div className="banner">
        <div className='banner_logo'><Link to="/">
          <img src="/img/svg/Recurso 2.png" alt=""/></Link>
        </div>
      </div>

      <nav className="navBar">
        <div className="navBar__menu" onClick={toggleDropDown}><img src="/img/svg/menu2.png" alt=""/></div>
        <ul className="navBar__list">
          <li><Link className='a-link' to="catLaptop">Laptops</Link></li>
          <li><Link className='a-link' to="catTeclado">Teclados</Link></li>
          <li><Link className='a-link' to='catMouses'>Mouses</Link></li>
          <li><Link className='a-link' to='catAuriculares'>Auriculares</Link></li>
          <li><Link className='a-link' to='catOtros'>Otros</Link></li>
        </ul>
        <div className="navBar__search">
          <input type="text" placeholder="Buscar..."/>
          <div className="search__img"><img src="/img/svg/glass.png" alt=""/></div>
        </div>

        {/* DropDown */}
        {dropDownOpen &&(
          <div className='dropDown'>
          <ul>
            <li>Parlantes</li>
            <li>Teclados</li>
            <li>Mouse</li>
            <li>Monitores</li>
            <li>Switchs</li>
          </ul>
        </div>
        )}

        {/* cat hover */}
        {isFocusNav && (
      <div className='navAnimation'>
        <ul className='navAnimation__ul'>
          <li className='ul_animation' onFocus={toggleFocusNav} key={1}><img src="public/img/icons/parlantes.jpg" alt="" /></li>
          <li className='ul_animation' key={2}><img src="public/img/icons/parlantes.jpg" alt="" /></li>
          <li className='ul_animation' key={3}><img src="public/img/icons/parlantes.jpg" alt="" /></li>
          <li className='ul_animation' key={4}><img src="public/img/icons/parlantes.jpg" alt="" /></li>
        </ul>
      </div>

        )
        }
        
      </nav>
      
      
    </>
  ) 
}

export default Navbar