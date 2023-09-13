import React from 'react'
import Categories from '../../components/Categories/Categorie'
import DATA_IMGP from '../../data/imgP.json'

const Home = ({data_products}) => {
  return (
    <Categories urlPortadas={DATA_IMGP}
                data_products={data_products}/>
  )
}

export default Home