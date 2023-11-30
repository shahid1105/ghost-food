import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import AddAFood from "../Pages/AddAFood/AddAFood";
import AllFood from "../Pages/AllFood/AllFood";
import Details from "../Pages/AllFood/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-food",
        element: <AddAFood></AddAFood>,
      },
      {
        path: "/all-food",
        element: <AllFood></AllFood>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);

export default router;
