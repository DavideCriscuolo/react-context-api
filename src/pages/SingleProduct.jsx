import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePange() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const url = ` https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div key={product.id} className="col">
            <div className="card">
              <img className="card-img-top" src={product.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
