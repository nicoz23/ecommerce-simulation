import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Menu from "../components/Menu";
import { useCart } from "../context/CartContext";
import Footer from '../components/Footer'
import Loading from "../components/Loading";

function Cart() {
  const userID = localStorage.getItem("userId");
  const { data: cartData } = useFetch(
    `https://fakestoreapi.com/carts/user/${userID}`
  );
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { totalUnits, setTotalUnits } = useCart();

  useEffect(() => {
    if (cartData) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const productRequests = cartData[0]?.products.map((item) =>
            fetch(`https://fakestoreapi.com/products/${item.productId}`).then(
              (res) => res.json()
            )
          );
          const productDetails = await Promise.all(productRequests);

          const combinedItems = productDetails.map((product, index) => ({
            ...product,
            quantity: cartData[0].products[index].quantity,
          }));

          setProducts(combinedItems);
          setCartItems(cartData[0].products);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchProducts();
    }
  }, [cartData]);

  useEffect(() => {
    const totalUnits = products.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    setTotalUnits(totalUnits);
  }, [products, setTotalUnits]);

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) {
      return removeFromCart(productId);
    }

    try {
      const updatedCart = cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      );

      await fetch(`https://fakestoreapi.com/carts/${cartData[0].id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userID,
          date: new Date().toISOString(),
          products: updatedCart,
        }),
      });

      setCartItems(updatedCart);
      const updatedProducts = products.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = cartItems.filter(
        (item) => item.productId !== productId
      );

      await fetch(`https://fakestoreapi.com/carts/${cartData[0].id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userID,
          date: new Date().toISOString(),
          products: updatedCart,
        }),
      });

      setCartItems(updatedCart);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const totalProductsPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const totalWithShipping =
    totalProductsPrice > 100 ? totalProductsPrice + 0 : totalProductsPrice + 20;

  if (loading) return (
  <>
    <Menu />
    <Loading/>
  </>);

  return (
    <>
      <Menu />
      <h1 className="w-full mx-auto text-center text-2xl font-bold uppercase text-[#333] my-7">
        Cart
      </h1>
      <div
        className="
        w-4/5 lg:max-w-screen xl:max-w-[90%] min-h-full flex flex-col lg:flex-row items-start justify-between overflow-hidden mx-auto
       "
      >
        <div className="flex flex-col gap-4 w-full lg:w-2/3 items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-11/12 flex flex-row flex-nowrap items-center justify-between rounded-2xl p-4 border-[1px] font-medium shadow-sm bg-white"
            >
              <img
                src={product.image}
                alt={product.title}
                className="max-w-36 max-h-36"
              />
              <div className="flex flex-col text-left items-start gap-4">
                <span>{product.title}</span>
                <button
                  className="text-blue-400"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
              <div className="border-2 rounded-lg  w-fit h-[0.5rem] flex flex-row flex-nowrap items-center justify-between gap-2 p-3 text-base lg:gap-4 lg:p-4 lg:text-lg">
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <span className="text-xl lg:text-2xl text-nowrap">
                $ {(product.price * product.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div
          className="
         relative shadow-sm w-9/12 mt-10 lg:mt-0 lg:w-1/4 mx-auto min-h-[30vh] h-[30vh] flex flex-col text-center rounded-2xl border bg-white
        "
        >
          <h5 className="text-lg font-semibold mt-4 pb-4 border-b-[1px] w-full">
            Purchase summary
          </h5>
          {totalUnits != 0 ? (
            <div className="flex flex-col w-full p-4">
              <div className="w-full">
                <span className="block float-left">
                  Products ({totalUnits})
                </span>
                <span className="block float-right">
                  $ {totalProductsPrice.toFixed(2)}
                </span>
              </div>
              <div className="w-full">
                <span className="block float-left">Shipping:</span>
                <span className="block float-right">
                  {totalProductsPrice > 100 ? "Free" : "$20"}
                </span>
              </div>
            </div>
          ) : (
            <div
            className="text-gray-600 m-5"
            >The products you add to the cart will be displayed here.</div>
          )}

          <div className="mx-auto text-center flex flex-col w-full absolute bottom-4 text-xl lg:text-2xl font-semibold">
            <div className="relative left-4 flex flex-row justify-between ">
              <span>Total</span>
              <span className="relative right-8">
                {totalUnits != 0 ? (`$ ${totalWithShipping.toFixed(2)}`) : "$ 0" }
              </span>
            </div>
            <button className="p-4 bg-[#2c3c4e] hover:bg-gray-700 rounded-2xl m-4 mb-0 text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
