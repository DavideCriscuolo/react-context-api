import { useContext } from "react";
import { ProductsContext } from "./../contexts/ProductsContext";
import Cards from "../components/Cards";

export default function Products() {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <>
      <main>
        <div></div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
            <Cards products={products}></Cards>
          </div>
        </div>
      </main>
    </>
  );
}
