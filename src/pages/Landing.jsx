import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/MealList";
const cocktailSearchUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const searchMealQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.meals;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchMealQuery(searchTerm));
    return { searchTerm };
  };

function Landing() {
  const { searchTerm } = useLoaderData();
  const { data: meals } = useQuery(searchMealQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList meals={meals} />
    </>
  );
}

export default Landing;
