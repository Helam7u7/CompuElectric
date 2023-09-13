import React from 'react'
import { useParams,Outlet } from 'react-router-dom'
import './Product.css'

const Product = ({ data_products }) => {
  const { categoria, id } = useParams();

  // Busca el producto correspondiente en tus datos
  const category = data_products.find((cat) => cat.categoria === categoria);
  const product = category?.product.find((prod) => prod.id === Number(id));

  if (!product) {
    // Maneja el caso en el que el producto no se encuentre
    return <p>Producto no encontrado</p>;
  }
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
        <div className='galery_main'><img src={product.img} alt="" /></div>
        <div className='galery_carrusel'>
          <div className='carrusel_img'><img src="/img/mouses/modelo1/mouse1-1.webp" alt="" /></div>
          <div className='carrusel_img'><img src="/img/mouses/modelo1/mouse1-2.webp" alt="" /></div>
          <div className='carrusel_img'><img src="/img/mouses/modelo1/mouse1-3.webp" alt="" /></div>
        </div>
      </div>
      <div className='infoProduct_name'>
        <h2 className='name_product'>
        {product.modelo}
        </h2>
        <h3 className='name_marca'>{product.marca}</h3>
        <p className='name_description'>
          {product.descripcion}
        </p>
        <h2 className='name_price'>S/.{product.precio}</h2>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product