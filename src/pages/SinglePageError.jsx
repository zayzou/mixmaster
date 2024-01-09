import { useRouteError } from "react-router-dom";

function SinglePageError() {
  const error = useRouteError();
  return <h2>{error.message}</h2>;
}

export default SinglePageError;
