import { useContext } from "react";
import cartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
function HeaderCartButton(props) {
  const cartCtx = useContext(cartContext);

  const numberOffCartItems = cartCtx.items.reduce(
    (currentNumber, item) => currentNumber + item.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOffCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
