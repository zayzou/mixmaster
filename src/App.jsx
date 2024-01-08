import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h3>Home page</h3>,
  },
  {
    path: "/about",
    element: <h3>About page</h3>,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
