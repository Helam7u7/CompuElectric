import React from 'react'
import "./Categorie.css"

const Categories = ({url}) => {
  return (
    <>
    <section class="categories">
    <div class="categories__img">
      <img class="imgL" alt=""/>
      <h2>Laptos</h2>
    </div>
    {/* <!-- cart categories --> */}
    <div class="categories__card">
      <div class="card_img"><img src="src/assets/img/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div class="info">
        <span class="ofer">S/2,100</span>
        <span class="real">S/1,200</span>
      </div>
    </div>
    <div class="categories__card">
      <div class="card_img"><img src="/src/assets/img/banner.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div class="info">
        <span class="ofer">S/2,100</span>
        <span class="real">S/1,200</span>
      </div>
    </div>
    <div class="categories__card">
      <div class="card_img"><img src="src/assets/img/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div class="info">
        <span class="ofer">S/2,100</span>
        <span class="real">S/1,200</span>
      </div>
    </div>
    <div class="categories__card">
      <div class="card_img"><img src="public/img/laptop1.png" alt=""/></div>
      <h3>LAPTOP MSI CYBORG 15 A12VF-043US</h3>
      <p>I7-12650H 8GB DDR5 512GB SSD...</p>
      <div class="info">
        <span class="ofer">S/2,100</span>
        <span class="real">S/1,200</span>
      </div>
    </div>
    <a  class="moreInfo" href="#">VER MÁS</a>

  </section>
    </>
  )
}

export default Categories