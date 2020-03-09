import React from "react";
import "./Cart.scss";
import { Button } from "react-bootstrap";
import { ReactComponent as CartEmpty } from "../../assets/svg/cart-empty.svg";

export default function Cart() {
  return (
    <>
      <Button variant="link" className="cart">
        <CartEmpty />
      </Button>
      <div className="cart-content">TOdos mis productos</div>
    </>
  );
}
