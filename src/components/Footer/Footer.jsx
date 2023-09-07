import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='contenedor_footer'>
        <div className='footer_icon grupo1'><a href="https://www.facebook.com/CompuElectric777/" target='_blank'><img src="/img/icons/fb.webp" alt="" /></a></div>
        <div className='footer_icon grupo1'><a href="https://api.whatsapp.com/send?phone=51949945838&text=Hola, quiero comprar tu producto!" target='_blank'><img src="/img/icons/wsp.webp" alt="" /></a></div>
        <div className='footer_icon grupo2'><a href="https://www.instagram.com/compuelectric_electronica?fbclid=IwAR01k5W5BPdK0aKtRyscgzJZYGJWIe09M-EegfOuci5BW1znIpjRUDYsj1w"><img src="/img/icons/ig3.png" alt="" /></a></div>
        <div className='footer_icon grupo2'><a href="https://www.tiktok.com/@compuelectric_electronic?fbclid=IwAR0ISIBDL4sYrNGo9YpQIYjw8Bkzo4qAB8-NZUs-fp3mhb3MrPEwRoTc3Jk"><img src="/img/icons/tktk4.png" alt="" /></a></div>
      </div>
    </>
  )
}

export default Footer