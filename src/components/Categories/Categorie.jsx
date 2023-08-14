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
      <div className="card_img"><img src={portada.productos[0].img} alt=""/></div>
      <h3>{portada.productos[0].modelo}</h3>
      <p>{portada.productos[0].desc}</p>
      <div className="info">
        <span className="ofer">{portada.productos[0].precioOf}</span>
        <span className="real">{portada.productos[0].precioOr}</span>
      </div>
    </div>
    <div className="categories__card">
      <div className="card_img"><img src={portada.productos[0].img} alt=""/></div>
      <h3>{portada.productos[0].modelo}</h3>
      <p>{portada.productos[0].desc}</p>
      <div className="info">
        <span className="ofer">{portada.productos[0].precioOf}</span>
        <span className="real">{portada.productos[0].precioOr}</span>
      </div>
    </div>
    <div className="categories__card">
      <div className="card_img"><img src={portada.productos[0].img} alt=""/></div>
      <h3>{portada.productos[0].modelo}</h3>
      <p>{portada.productos[0].desc}</p>
      <div className="info">
        <span className="ofer">{portada.productos[0].precioOf}</span>
        <span className="real">{portada.productos[0].precioOr}</span>
      </div>
    </div>
    <div className="categories__card">
      <div className="card_img"><img src={portada.productos[0].img} alt=""/></div>
      <h3>{portada.productos[0].modelo}</h3>
      <p>{portada.productos[0].desc}</p>
      <div className="info">
        <span className="ofer">{portada.productos[0].precioOf}</span>
        <span className="real">{portada.productos[0].precioOr}</span>
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