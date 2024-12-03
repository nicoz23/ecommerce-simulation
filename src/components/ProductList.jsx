import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Loading from "./Loading";
import Card from "./Card";

function ProductList({ apiUrl, title }) {
  const { data, loading } = useFetch(apiUrl);

  return (
    <>
      <Menu />
      <h1 className="w-full mx-auto text-center text-2xl font-bold uppercase text-[#333] my-7">
        {title}
      </h1>
      <div className="lg:max-w-[90%] w-full min-h-screen flex flex-wrap justify-center content-start overflow-hidden mx-auto">

          {loading ? (
            <Loading/>
          ) : (
            data?.map((items) => (
              <Card items={items} key={items.id}/>
            ))
          )}
      </div>
      <Footer/>
    </>
  );
}

export default ProductList;
