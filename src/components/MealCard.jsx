import React from "react";
import Wrapper from "../assets/wrappers/CocktailCard";
import { Link, useOutletContext } from "react-router-dom";
function CocktailCard({ id, name, thumb, category, tags }) {
  const data = useOutletContext();
  console.log(data);
  return (
    <Wrapper>
      <div className="img-container">
        <img className="img" src={thumb} alt={name} />
      </div>

      <div className="footer">
        <h4>{name}</h4>
        {tags ? <p>{tags}</p> : <p>---</p>}
        <h5>{category}</h5>
        <Link to={`/meals/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
}

export default CocktailCard;
