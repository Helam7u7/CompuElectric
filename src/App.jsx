import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categorie'
import Galery from './pages/galeryImg/Galery'

function App() {
  const listaUrl = [
    'src/assets/img/laptops.png',
    'src/assets/img/mouse.png',
    'src/assets/img/teclado.png',
  ]
  return (
    <>
      <Navbar/>
      {/* <Categories url={listaUrl}/>
      <Categories url={listaUrl}/>
      <Categories url={listaUrl}/> */}
      <Galery/>
    </>
  )
}

export default App
