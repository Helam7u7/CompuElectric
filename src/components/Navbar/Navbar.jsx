import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({data_products}) => {

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
        <Link to='/' className='h2-home'>
          <span className='marca_btn'>
            <h2 className='btn_name'>HOME</h2>
            <div className='btn_img'><img src="/img/svg/home.png" alt="" /></div>
          </span>
        </Link>
        <span className='marca_name'>
          <h1 className='name_title'>Compu Electric</h1>
          <h2 className='name_subTitle'>POR TODO PERÚ</h2>
        </span>
        <span className='marca_phone'>
          <img src="/img/svg/icons8-facebook-48.png" alt="" />
          <img src="/img/svg/phone.png" alt="" />
          <h3>949 945 838</h3>
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
          <li>
            <Link className='a-link' to={`/categoria/${data_products[0].categoria}`}>
              {data_products[0].categoria}
            </Link>
          </li>
          <li>
            <Link className='a-link' to={`/categoria/${data_products[1].categoria}`}>
              {data_products[1].categoria}
            </Link>
          </li>
          <li>
            <Link className='a-link' to={`/categoria/${data_products[2].categoria}`}>
              {data_products[2].categoria}
            </Link>
          </li>
          <li>
            <Link className='a-link' to={`/categoria/${data_products[3].categoria}`}>
              {data_products[3].categoria}
            </Link>
          </li>
        </ul>
        <div className="navBar__search">
          <input type="text" placeholder="Buscar..."/>
          <div className="search__img"><img src="/img/svg/glass.png" alt=""/></div>
        </div>

        {/* DropDown */}
        {dropDownOpen &&(
          <div className='dropDown'>
          <ul>
            {data_products.map(producto => (
              <li><Link className='dropDown-link' to={`/categoria/${producto.categoria}`}>{producto.categoria}</Link></li>
            ))}
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