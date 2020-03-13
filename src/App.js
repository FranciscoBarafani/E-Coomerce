import React, { useEffect, useState } from "react";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import Products from "./components/Products";
import { urlApiProducts } from "./utils/constants";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const products = useFetch(urlApiProducts, null);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    getProductsCart();
  }, []);

  const getProductsCart = () => {
    const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
    if (idsProducts) {
      const idsProductsSplit = idsProducts.split(",");
      setProductsCart(idsProductsSplit);
    } else {
      setProductsCart({});
    }
  };

  const addProductCart = (id, name) => {
    console.log(id);
    console.log(name);
    const idsProducts = productsCart;
    console.log(productsCart);
    idsProducts.push(id);
    setProductsCart(idsProducts);
    localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
    getProductsCart();
    toast.success(`${name} añadido al carrito correctamente.`);
  };

  return (
    <div className="App">
      <div>
        <TopMenu
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
        />
        <Products products={products} addProductCart={addProductCart} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          false
          draggable
          pauseOnHover={false}
        ></ToastContainer>
      </div>
    </div>
  );
}

export default App;
