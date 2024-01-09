import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
export default function CocktailList({ meals }) {
  return (
    <Wrapper>
      {meals.map((meal) => {
        return <CocktailCard meal={meal} />;
      })}
    </Wrapper>
  );
}
