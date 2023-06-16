import { useContext, useEffect, useState } from "react";
import cartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
function HeaderCartButton(props) {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(cartContext);

  const numberOffCartItems = cartCtx.items.reduce(
    (currentNumber, item) => currentNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${buttonIsHighlighted && classes.bump}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => setButtonIsHighlighted(false), 300);

    return clearTimeout(timer);
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOffCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
