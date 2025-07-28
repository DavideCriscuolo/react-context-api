/* Consegna Sfruttiamo le Context API per rendere disponibile la lista dei prodotti in tutta la nostra app.
Partiamo col definire la lista dei prodotti all’interno di App.jsx
Se non lo abbiamo già fatto in precedenza, creiamo un componente ProductsPage.jsx che conterrà al suo interno un titolo e un componente ProductsList.jsx che mostra la lista di tutti i nostri post.
Creiamo un file per definire il nostro Context ed esportiamolo
Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione - Facciamo in modo che il componente ProductsList.jsx recuperi i prodotti consumando il Context e crei dunque una card per ciascuno di essi.
La struttura dell’App deve essere
App.jsx > ProductsPage.jsx > ProductsList.jsx > ProductCard.jsx
Bonus
Implementare un componente Alert gestito tramite Context
   */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import { ProductsProvider } from "./contexts/ProductsContext";
function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout></DefaultLayout>}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Products" element={<Products />}></Route>{" "}
              <Route
                path="/Products/:id"
                element={<SingleProduct></SingleProduct>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
