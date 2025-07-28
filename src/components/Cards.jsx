import { Link } from "react-router-dom";

export default function Cards({ products }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="col p-2">
            <div className="card p-3">
              <img src={product.image} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
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
