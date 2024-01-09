import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
export default function CocktailList({ meals }) {
  if (!meals) {
    return <h4 style={{ textAlign: "center" }}>No Matching Meals Found...</h4>;
  }

  const formattedMeals = meals.map((meal) => {
    const { idMeal, strMeal, strCategory, strMealThumb } = meal;
    return {
      id: idMeal,
      name: strMeal,
      category: strCategory,
      thumb: strMealThumb,
    };
  });
  return (
    <Wrapper>
      {formattedMeals.map((meal) => {
        return <CocktailCard key={meal.id} {...meal} />;
      })}
    </Wrapper>
  );
}
