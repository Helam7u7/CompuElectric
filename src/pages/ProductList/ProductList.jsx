import React, { useState } from 'react';
import './ProductList.css';
import { Link, Outlet, useParams } from 'react-router-dom';

const ProductList = ({ data_products }) => {
  const { categoria } = useParams();
  const filteredProducts = data_products.find((category) => category.categoria === categoria);

  // Agrega un estado para la página actual y la cantidad de productos por página
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  console.log(filteredProducts);

  // Calcula el índice de inicio y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.product.slice(indexOfFirstProduct, indexOfLastProduct);

  // Función para cambiar la página actual
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className='contenedor_categoria'>
        <div className='categoria_filter'>
          <h1>filtro</h1>
        </div>
        <div className='categoria_results'>
          {/* cardProduct */}
          {currentProducts.map((product) => (
            <div className='results_card' key={product.id}>
              <h3>
                <img src="/img/svg/disponible.svg" alt="" /> disponible
              </h3>
              <div className='categoria_img'>
                <Link to={`/categoria/${filteredProducts.categoria}/${product.id}`}>
                  <img src={product.imgMain} alt="" />
                </Link>
              </div>
              <h2>{product.modelo}</h2>
              <p>{product.descripcion}</p>
              <div className='card_precio'>
                <span>S/37</span>
                <span>{product.precio}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Agrega la paginación */}
        <div className='pagination'>
          {Array.from({ length: Math.ceil(filteredProducts.product.length / productsPerPage) }).map((_, index) => (
            <button className='paginationBtn' key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProductList;
