import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Galery.css'

const Galery = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="container__card">
      <div className='cardCarrusel'>
        <div className="card_img"><img src="/img/Main- copia.png" alt=""/></div>
        <div className='container_carrusel'>
          <div className='carrusel_img'><img src="/img/fuenteDePoder1.png" alt="" /></div>
          <div className='carrusel_img'><img src="/img/fuenteDePoder2.png" alt="" /></div>
          <div className='carrusel_img'><img src="/img/fuenteDePoder3.png" alt="" /></div>
        </div>
      </div>
      <div className='cardInfo'>
        <h2>FUENTE DE PODER ATX P4500 450W CON CABLE EN CAJA MICRONICS</h2>
      </div>
    </div>
    </>
  )
}

export default Galery