import { Link } from "react-router-dom";

export default function Cards({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="col p-2">
            <div className="card p-3">
              <Link to={`/Products/${product.id}`}>
                <img
                  className="imgProduct w-100"
                  src={product.image}
                  alt="Title"
                />
              </Link>
              <div className="card-body">
                <Link className="link" to={`/Products/${product.id}`}>
                  <h4 className="card-title">{product.title}</h4>{" "}
                </Link>
                <p className="card-text">
                  <strong>Descrizione prodotto: </strong> {product.description}
                </p>
                <span>
                  {" "}
                  <strong>Categoria:</strong> {product.category}
                </span>
                <Link to={`/Products/${product.id}`}>Vai al prodotto</Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
