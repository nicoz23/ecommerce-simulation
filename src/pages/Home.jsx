import Menu from "../components/Menu"
import CardCarrousel from "../components/CardCarrousel"
import Footer from "../components/Footer"
import Banner from "/banner.webp"

function App() {

  return (
    <>
      <Menu/>
      <div className="w-[90%] md:w-4/5  mx-auto">
        <img 
          className="mx-auto h-[35vh] lg:h-[45vh] w-full my-8 object-cover object-top drop-shadow-md rounded-2xl"
          src={Banner} alt="banner" />
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto">
        <h3 className="uppercase font-bold text-2xl md:text-3xl">
          women's clothing
        </h3>
        <CardCarrousel urlFetch="https://fakestoreapi.com/products/category/women's clothing"/>
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto">
        <h3 className="uppercase font-bold text-2xl md:text-3xl">
          Electronics
        </h3>
        <CardCarrousel urlFetch="https://fakestoreapi.com/products/category/electronics"/>
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto">
        <h3 className="uppercase font-bold text-2xl md:text-3xl">
        Men's Clothing
        </h3>
        <CardCarrousel urlFetch="https://fakestoreapi.com/products/category/men's clothing"/>
      </div>
      
      <Footer/>
    </>
  )
}

export default App
