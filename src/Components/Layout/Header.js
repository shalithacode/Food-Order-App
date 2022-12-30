import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
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
