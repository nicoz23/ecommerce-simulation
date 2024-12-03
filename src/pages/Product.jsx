import { useFetch } from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import Menu from '../components/Menu'
import { IoMdCart } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import CardCarrousel from "../components/CardCarrousel";
import { useState } from "react";

function Product() {
  const { id } = useParams();
  const { data } = useFetch(`https://fakestoreapi.com/products/${id}`)
  const [ addCart, setAddCart ] = useState(false)

  const addToCart = async (productId, quantity) => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          date: new Date().toISOString().split("T")[0],
          products: [{productId:productId, quantity:quantity}],
        }),
      });

      const data = await response.json();
      console.log(data);
      setAddCart(true)
      setTimeout(() => {
        setAddCart(false)
      }, 3000)
    } catch (error) {
      console.error(error);
    }
  };

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= Math.floor(rate) ? "filled" : ""}`}
          style={
            i === Math.ceil(rate) && rate % 1 !== 0
              ? {
                  background: `linear-gradient(to right, #f5c518 ${
                    (rate % 1) * 100
                  }%, #ccc 0%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }
              : {}
          }
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Menu />
        {data ? <>
        <div key={data.id}
        className="border-2 w-4/5 xl:w-3/5 mx-auto mt-10 h-full flex flex-row justify-around bg-white"
        >

          <div
          className="w-1/2 p-12">
            <img src={data.image} alt={data.title}
            className="max-h-[70vh] mx-auto"
            />
          </div>

          <div
          className="w-1/2 p-12 gap-8"
          >
            <h1
            className="font-bold text-2xl mt-10 mb-1"
            >{data.title}</h1>
            <p
            className="flex flex-row items-center"
            >
                {renderStars(data.rating.rate)}
                ({data.rating.rate})
                <span className="ml-1 text-sm">{data.rating.count} reviews</span>
            </p>
            <span
            className="flex font-bold text-3xl my-5"
            >${data.price}</span>
            <p
            className="mb-10 w-"
            >{data.description}</p>
            <button
            onClick={() => addToCart(data.id, 1)}
            className="flex items-center justify-center w-full gap-2 p-4 bg-[#2c3c4e] hover:bg-gray-700 rounded-2xl m-4 mb-0 text-lg font-semibold text-white"
            ><IoMdCart/><span> Add to cart</span> </button>
            {addCart && (
            <small
            className="flex items-center justify-center text-green-900"
            >One item added to the cart</small>
            )}
            <p
            className="font-semibold flex flex-nowrap items-center justify-center mt-4 gap-2"
            >
            <MdOutlineLocalShipping />
            Free delivery on orders over $30.0</p>
          </div>
        </div>
        <div className="w-4/5 xl:w-3/5 mx-auto mt-6">
          <h3 className="uppercase font-bold text-2xl">See more products like this</h3>
          <CardCarrousel urlFetch={`https://fakestoreapi.com/products/category/${data?.category}`} />
        </div>
        </>
       : <Loading />}
        <Footer/>
    </>
  )
}

export default Product
