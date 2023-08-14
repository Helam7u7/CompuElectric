import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categorie'
import Galery from './pages/galeryImg/Galery'

import DATA_IMGP from './data/imgP.json'

function App() {
  return (
    <>
      <Navbar/>
      <Categories urlPortadas={DATA_IMGP}/>
      {/* <Galery/> */}
    </>
  )
}

export default App
