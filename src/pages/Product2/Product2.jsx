import { useState } from 'react';
import './Product2.css'

const Product = () => {

  const [mainImage, setMainImage] = useState('/img/audifonos/audifono_1.jpg');

  const changeImage = (newImage) => {
    setMainImage(newImage);
}
  return (
    <>
      <div className='contenedor_carrusel'>
        <div className='carrusel_list'>
          <div className='list_img' onClick={() => changeImage('/img/audifonos/audifono_1.jpg')}><img src="/img/audifonos/audifono_1.jpg" alt="" /></div>
          <div className='list_img' onClick={() => changeImage('/img/audifonos/audifono_2.jpg')}><img src="/img/audifonos/audifono_2.jpg" alt="" /></div>
          <div className='list_img' onClick={() => changeImage('/img/Audifonos/audifono_3.jpg')}><img src="/img/audifonos/Audifono_3.jpg" alt="" /></div>
          <div className='list_img' onClick={() => changeImage('/img/audifonos/audifono_4.jpg')}><img src="/img/audifonos/audifono_4.jpg" alt="" /></div>
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