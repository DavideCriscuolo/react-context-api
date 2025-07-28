import { createContext, useEffect, useState } from "react"; //  importiamo la libreria da react

// Creamo il context
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
