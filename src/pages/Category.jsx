import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

function Category() {
  const { item } = useParams();

  return (
    <ProductList
      apiUrl={`https://fakestoreapi.com/products/category/${item}`}
      title={item}
    />
  );
}

export default Category;
