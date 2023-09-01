import React from 'react'
import'./Teclado.css'
import { Link } from 'react-router-dom'

const Auricular = () => {
  return (
    <>
      <div className='contenedor_categoria'>
        <div className='categoria_filter'>
          <h1>filtro</h1>
        </div>
        <div className='categoria_results'>
          {/* cardProduct */}
          <div className='results_card'>
            <h3><img src="/img/svg/disponible.svg" alt="" /> disponible</h3>
            <div className='categoria_img'><Link to='/ProTone'><img src="/img/teclados/modelo1/modelo1-1.jpg" alt="" /></Link> </div>
            <h2>MICRONICS PLATINUM DJ BLK/BLU MIC H701</h2>
            <p>AURICULAR+MICROFONO MICRONICS 40 unid x caja - garantía 3 meses Colores: Negro/ Azul y Negro/Rojo </p>
            <div className='card_precio'>
              <span>S/37</span>
              <span>S/25</span>
            </div>
          </div>
          {/* cardProduct */}
          <div className='results_card'>
            <h3><img src="/img/svg/disponible.svg" alt="" /> disponible</h3>
            <div className='categoria_img'><Link to='/Product2'><img src="/img/teclados/modelo2/keyboardM1-1.jpg" alt="" /></Link> </div>
            <h2>MICRONICS PLATINUM DJ BLK/BLU MIC H701</h2>
            <p>AURICULAR+MICROFONO MICRONICS 40 unid x caja - garantía 3 meses Colores: Negro/ Azul y Negro/Rojo </p>
            <div className='card_precio'>
              <span>S/37</span>
              <span>S/25</span>
            </div>
          </div>
          {/* cardProduct */}
          <div className='results_card'>
            <h3><img src="/img/svg/disponible.svg" alt="" /> disponible</h3>
            <div className='categoria_img'><Link to='/Product3'><img src="/img/teclados/modelo3/keyBoard2-1.jpg" alt="" /></Link> </div>
            <h2>MICRONICS PLATINUM DJ BLK/BLU MIC H701</h2>
            <p>AURICULAR+MICROFONO MICRONICS 40 unid x caja - garantía 3 meses Colores: Negro/ Azul y Negro/Rojo </p>
            <div className='card_precio'>
              <span>S/37</span>
              <span>S/25</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auricular