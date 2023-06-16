import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
function Cart() {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "1", name: "Sushi", amount: 2, price: 12.99 }].map((itme) => (
        <li key={itme.id}>{itme.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Totle amount</span>
        <span>2.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Colse</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
