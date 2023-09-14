import React,{useState} from 'react'
import { useParams,Outlet } from 'react-router-dom'
import './Product.css'

const Product = ({ data_products }) => {
  const { categoria, id } = useParams();
  const [mainImage, setMainImage] = useState(null);

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
            {product.caracteristica.map(carat => (
              <li>- {carat}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="infoProduct_galery">
        <div className="galery_main">
          <img src={mainImage || product.imgMain} alt="" />
        </div>
        <div className="galery_carrusel">
          {product.imgs.map((img, index) => (
            <div
              className="carrusel_img"
              key={index}
              onMouseEnter={() => setMainImage(img)}
            >
              <img src={img} alt="" />
            </div>
          ))}
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