import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
function CocktailCard({ meal }) {
  return <Wrapper key={meal.idMeal}>{meal.strMeal}</Wrapper>;
}

export default CocktailCard;
