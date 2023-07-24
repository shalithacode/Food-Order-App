import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeal = async () => {
      const respose = await fetch(
        "https://food-order-app-5e249-default-rtdb.asia-southeast1.firebasedatabase.app/meals_db.json"
      );
      if (!respose.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await respose.json();

      const loadedMeals = [];

      for (const key in data.meals) {
        loadedMeals.push({
          id: key,
          name: data.meals[key].name,
          description: data.meals[key].description,
          price: data.meals[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeal().catch((e) => {
      setIsLoading(false);

      setHttpError(e.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className={classes.mealLoading}>Loding...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p className={classes.mealError}>{httpError}</p>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
