import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
import "./App.css";
import { useEffect, useState } from "react";
import productList from "./component/data";
import Hero from "./component/Hero";

function App() {
  const [productId, setProductId] = useState(null);
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    const filteredProduct = productList.filter(
      (product) => product.id === productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredProduct])
  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Hero></Hero>
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProductId}></Home>}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}></Cart>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
