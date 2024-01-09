import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailList";
const cocktailSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { meals: response.data.meals, searchTerm };
};
function Landing() {
  const { searchTerm, meals } = useLoaderData();

  return (
    <>
      <h2>{searchTerm}</h2>
      <Wrapper>
        {meals.map((meal) => {
          return <li key={meal.idMeal}>{meal.strMeal}</li>;
        })}
      </Wrapper>
    </>
  );
}

export default Landing;
