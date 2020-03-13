import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";
import { ReactComponent as CartFull } from "../../assets/svg/cart-full.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { ReactComponent as Garbage } from "../../assets/svg/garbage.svg";
import { STORAGE_PRODUCTS_CART } from "../../utils/constants";
import { removeArrayDuplicates } from "../../utils/arrayFunc";

export default function Cart(props) {
  const { productsCart, getProductsCart, products } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const widthCartContent = cartOpen ? 400 : 0;
  const [singleProductsCart, setSingleProductsCart] = useState([]);

  const openCart = () => {
    setCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setCartOpen(false);
    document.body.style.overflow = "scroll";
  };

  const emptyCart = () => {
    localStorage.removeItem();
    getProductsCart();
  };

  useEffect(() => {
    const allProductsId = removeArrayDuplicates(productsCart);
    setSingleProductsCart(allProductsId);
  }, [productsCart]);

  return (
    <div className="cart">
      <Button variant="link">
        {productsCart.length > 0 ? (
          <CartFull onClick={openCart} />
        ) : (
          <CartEmpty onClick={openCart} />
        )}
      </Button>
      <div className="cart-content" style={{ width: widthCartContent }}>
        <CartContentHeader closeCart={closeCart} emptyCart={emptyCart} />
        {singleProductsCart.map((idProductsCart, index) => (
          <CartContentProducts key={index} product={products} />
        ))}
        }
      </div>
    </div>
  );
}

function CartContentHeader(props) {
  const { closeCart, emptyCart } = props;
  return (
    <div className="cart-content__header">
      <div>
        <Close onClick={closeCart} />
        <h2>Carrito</h2>
      </div>
      <Button variant="link">
        Vaciar
        <Garbage onClick={emptyCart} />
      </Button>
    </div>
  );
}

function CartContentProducts(props) {
  const { products } = props;

  return "Productos";
}
