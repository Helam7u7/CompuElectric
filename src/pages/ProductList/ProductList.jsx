import React from 'react'
import'./ProductList.css'
import { Link , Outlet, useParams} from 'react-router-dom'

const ProductList = ({data_products}) => {
  const {categoria} = useParams()
  const filteredProducts = data_products.find((category) => category.categoria === categoria);

  return (
    <>
      <div className='contenedor_categoria'>
        <div className='categoria_filter'>
          <h1>filtro</h1>
        </div>
        <div className='categoria_results'>
          {/* cardProduct */}
          {filteredProducts &&
        filteredProducts.product.map((product) => (
          <div className='results_card' key={product.id}>
          <div className='results_card'>
            <h3><img src="/img/svg/disponible.svg" alt="" /> disponible</h3>
            <div className='categoria_img'><Link to={`/categoria/${product.categoria}/${product.id}`}><img src="/img/audifonos/audifono1.webp" alt="" /></Link> </div>
            <h2>{product.modelo}</h2>
            <p>{product.descripcion}</p>
            <div className='card_precio'>
              <span>S/37</span>
              <span>{product.precio}</span>
            </div>
          </div>
            
          </div>
        ))}
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default ProductList