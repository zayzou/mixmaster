import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
function CocktailCard({ id, name, thumb, category }) {
  return <Wrapper key={id}>{name}</Wrapper>;
}

export default CocktailCard;
