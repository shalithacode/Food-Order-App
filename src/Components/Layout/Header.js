import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsImg}
          alt="Meal table"
        />
      </div>
    </>
  );
}

export default Header;
