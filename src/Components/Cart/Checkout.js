import classes from "./Checkout.module.css";
import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const hasFiveDigits = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSteet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredSteet);
    const enteredPostalIsValid = hasFiveDigits(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onsubmit({
      name: enteredName,
      street: enteredSteet,
      postalCode: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please Enter Valid name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.street ? "" : classes.invalid
        }`}
      >
        {" "}
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please Enter Valid street.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please Enter Valid postal code.</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}
      >
        {" "}
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please Enter Valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
