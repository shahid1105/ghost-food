import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import AddAFood from "../Pages/AddAFood/AddAFood";
import AllFood from "../Pages/AllFood/AllFood";

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
    ],
  },
]);

export default router;
