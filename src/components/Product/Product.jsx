import React from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'

const Product = ({data_products}) => {
  const {categoria,id} = useParams()
  const filteredProducts = data_products.find((categoria) => {
    categoria.categoria === 'Mouses' 
    console.log(categoria.categoria);
  });
  // console.log(filteredProducts);

  // console.log(filteredProducts);

  console.log(categoria);
  console.log(id);
  return (
    <div className='container_infoProduct'>
      <div className='infoProduct_detalle'>
        <h2 className='detalles_titulo'>Características</h2>
        <div className='detalles_list'>
          <ul>
            <li>- Soporte de placas</li>
            <li>- Suspención inalambricas</li>
            <li>- Color negro</li>
            <li>- Vidrio templado</li>
          </ul>
        </div>
      </div>
      <div className='infoProduct_galery'>
        <div className='galery_main'><img src="/img/mouses/modelo1/mouse1-1.webp" alt="" /></div>
        <div className='galery_carrusel'>
          <div className='carrusel_img'><img src="/img/mouses/modelo1/mouse1-1.webp" alt="" /></div>
          <div className='carrusel_img'><img src="/img/mouses/modelo1/mouse1-2.webp" alt="" /></div>
          <div className='carrusel_img'><img src="/img/mouses/modelo1/mouse1-3.webp" alt="" /></div>
        </div>
      </div>
      <div className='infoProduct_name'>
        <h2 className='name_product'>
        SHELBY MIC S7011BT SISTEMA DE AUDIO RITMIC 
        LED KTV FM SD+USB RMS:200W MICRONICS
        </h2>
        <h3 className='name_marca'>Microninc</h3>
        <p className='name_description'>
          Compatible con: Computadoras, TV, DVD, Smartphone, Tablet
          , Laptop y Otros Equipos de Audio.
        </p>
        <h2 className='name_price'>S/.98.00</h2>
      </div>
    </div>
  )
}

export default Product