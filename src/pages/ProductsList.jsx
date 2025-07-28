import Cards from "../components/Cards";
import { useContext } from "react";
import { ProductsContext } from "./../contexts/ProductsContext";

export default function ProductsList() {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
      <Cards products={products}></Cards>
    </div>
  );
}
