import React from 'react'
import Categories from '../../components/Categories/Categorie'
import DATA_IMGP from '../../data/imgP.json'

const Home = () => {
  return (
    <Categories urlPortadas={DATA_IMGP}/>
  )
}

export default Home