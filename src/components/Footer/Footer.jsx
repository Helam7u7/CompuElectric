import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='contenedor_footer'>
        <div className='footer_icon grupo1'><a href="https://www.facebook.com/CompuElectric777/" target='_blank'><img src="/img/icons/fb.webp" alt="" /></a></div>
        <div className='footer_icon grupo1'><img src="/img/icons/wsp.webp" alt="" /></div>
        <div className='footer_icon grupo2'><img src="/img/icons/ig3.png" alt="" /></div>
        <div className='footer_icon grupo2'><img src="/img/icons/tktk4.png" alt="" /></div>
      </div>
    </>
  )
}

export default Footer