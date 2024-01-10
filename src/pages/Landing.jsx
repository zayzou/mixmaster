import axios from "axios";
import { useLoaderData } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CocktailList from "../components/MealList";
const cocktailSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search" || "");
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { meals: response.data.meals, searchTerm };
};
function Landing() {
  const { searchTerm, meals } = useLoaderData();

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList meals={meals} />
    </>
  );
}

export default Landing;
