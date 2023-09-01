import { useState } from 'react';
import './Product4.css'

const Product = () => {

  const [mainImage, setMainImage] = useState('/img/teclados/modelo3/keyBoard2-1.jpg');

  const changeImage = (newImage) => {
    setMainImage(newImage);
}
  return (
    <>
      <div className='contenedor_carrusel'>
        <div className='carrusel_list'>
          <div className='list_img' onClick={() => changeImage('/img/teclados/modelo3/keyBoard2-1.jpg')}><img src="/img/teclados/modelo3/keyBoard2-1.jpg" alt="" /></div>
          <div className='list_img' onClick={() => changeImage('/img/teclados/modelo3/keyBoard2-2.jpg')}><img src="/img/teclados/modelo3/keyBoard2-2.jpg" alt="" /></div>
          <div className='list_img' onClick={() => changeImage('/img/teclados/modelo3/keyBoard2-3.jpg')}><img src="/img/teclados/modelo3/keyBoard2-3.jpg" alt="" /></div>
          <div className='list_img' onClick={() => changeImage('/img/teclados/modelo3/keyBoard2-4.jpg')}><img src="/img/teclados/modelo3/keyBoard2-4.jpg" alt="" /></div>
        </div>
        <div className='carrusel_img'><img src={mainImage} alt="" /></div>
        <div className='carrusel_info'>
          <h2>Titulo Producto</h2>
          <span>S/200</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quidem.</p>
          <ul className='info_list'>
            Características
            <li><b>Conectores:</b></li>
            <li>1 de 20+4 Pines</li>
            <li>3 Sata</li>
            <li>1 ATA/IDE (Pin Molex)</li>
            <li>1 ATA/IDE (Pin Molex)</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Product