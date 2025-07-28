import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  function genrProdcuts() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }

  useEffect(genrProdcuts, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
            {products.map((product) => {
              return (
                <div key={product.id} className="col p-2">
                  <div className="card p-3">
                    <img src={product.image} alt="Title" />
                    <div className="card-body">
                      <h4 className="card-title">{product.title}</h4>
                      <p className="card-text">
                        <strong>Descrizione prodotto: </strong>{" "}
                        {product.description}
                      </p>
                      <span>
                        {" "}
                        <strong>Categoria:</strong> {product.category}
                      </span>
                      <Link to={`/Products/${product.id}`}>
                        Vai al prodotto
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
