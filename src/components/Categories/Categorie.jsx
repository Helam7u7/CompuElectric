import React from 'react'
import "./Categorie.css"

const Categories = ({urlPortadas}) => {
  return (
    <>
    {urlPortadas.map((portada)=>{
      return(
    <section className="categories">
    <div className="categories__img">
      <img className="imgL" src={portada.url} alt={portada.name}/>
      <h2>Laptos</h2>
    </div>
    {/* <!-- cart categories --> */}
    <div className="categories__card">
      <div className="card_img"><img src="/img/products/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div className="info">
        <span className="ofer">S/2,100</span>
        <span className="real">S/1,200</span>
      </div>
    </div>
    <div className="categories__card">
      <div className="card_img"><img src="/img/products/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div className="info">
        <span className="ofer">S/2,100</span>
        <span className="real">S/1,200</span>
      </div>
    </div>
    <div className="categories__card">
      <div className="card_img"><img src="/img/products/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div className="info">
        <span className="ofer">S/2,100</span>
        <span className="real">S/1,200</span>
      </div>
    </div>
    <div className="categories__card">
      <div className="card_img"><img src="/img/products/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div className="info">
        <span className="ofer">S/2,100</span>
        <span className="real">S/1,200</span>
      </div>
    </div>
    <a  className="moreInfo" href="#">VER MÁS</a>

    </section>
        
      )
    })}
    </>
  )
}

export default Categories