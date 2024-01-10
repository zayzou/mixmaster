import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  try {
    const { id } = params;
    const response = await axios.get(`${url}${id}`);
    const [meal] = response.data.meals;

    let ingredients = new Map();
    for (let index = 1; index < 20; index++) {
      const ing = `strIngredient${index}`;
      if (!meal[ing]) {
        break;
      }
      const measure = `strMeasure${index}`;
      ingredients.set(meal[ing], meal[measure]);
    }

    return {
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      thumb: meal.strMealThumb,
      tags: meal.strTags,
      youtube: meal.strYoutube,
      area: meal.strArea,
      instructions: meal.strInstructions,
      source: meal.strSource,
      ingredients: ingredients,
    };
  } catch (error) {
    return null;
  }
};

const Meal = () => {
  const meal = useLoaderData();
  if (!meal) {
    return <Navigate to="/" />;
  }
  const {
    id,
    name,
    category,
    thumb,
    tags,
    youtube,
    area,
    instructions,
    source,
    ingredients,
  } = meal;
  const ings = [...ingredients.entries()];

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3 className="title">{name}</h3>
      </header>
      <div className="meal">
        <a href={`${thumb}`} target="_blank">
          <img src={thumb} alt={name} style={{ width: "100%" }} />
        </a>
        <div className="meal-info">
          <p>
            <span className="meal-data">name:</span>
            {name}
          </p>
          <p>
            <span className="meal-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="meal-data">Area:</span>
            {area}
          </p>
          {tags && (
            <p>
              <span className="meal-data">tags:</span>
              {tags}
            </p>
          )}
          {youtube && (
            <p>
              <span className="meal-data">Youtube:</span>
              <a href={youtube} className="nav-link active" target="_blank">
                How to make {name}
              </a>
            </p>
          )}
          {source && (
            <p>
              <span className="meal-data">Source:</span>
              <a href={source} className="nav-link active" target="_blank">
                Learn more
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="container">
        <div style={{ width: "100%" }}>
          <h3 className="title">📖 Instructions:</h3>
          <p
            className="ingredients"
            dangerouslySetInnerHTML={{
              __html: instructions.replaceAll("\r\n", "</br><br>"),
            }}
          ></p>
        </div>
        <div style={{ width: "100%" }}>
          <h3 className="title">🥦 Ingredients</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Ingredient</th>
                <th>Measurement</th>
              </tr>
            </thead>
            <tbody>
              {ings.map((e) => {
                return (
                  <tr key={e[0]}>
                    <td>
                      <a
                        target="_blank"
                        href={`https://www.themealdb.com/images/ingredients/${e[0]}.png
`}
                      >
                        <img
                          style={{ height: "80px" }}
                          src={`https://www.themealdb.com/images/ingredients/${e[0]}-Small.png
`}
                        ></img>
                      </a>
                    </td>
                    <td>{e[0]}</td>
                    <td>{e[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Meal;
