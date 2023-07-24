import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import cartContext from "../../store/cart-context";
import Checkout from "./Checkout";

function Cart(props) {
  const [showCheckout, setShowCheckout] = useState(false);
  const cartCtx = useContext(cartContext);

  const cartItemAddHnadler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHnadler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderHanlder = () => {
    setShowCheckout(true);
  };

  const submitOrderHanlder = (userData) => {
    fetch(
      "https://food-order-app-5e249-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, order: cartCtx.items }),
      }
    );
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHnadler.bind(null, item)}
          onRemove={cartItemRemoveHnadler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Totle amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      {showCheckout && (
        <Checkout onsubmit={submitOrderHanlder} onCancel={props.onHideCart} />
      )}
      {!showCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onHideCart}>
            Colse
          </button>
          {cartCtx.items.length > 0 && (
            <button className={classes.button} onClick={orderHanlder}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}

export default Cart;
