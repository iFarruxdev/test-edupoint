import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "profile",
          element: <Profile />
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />
}

export default App;
