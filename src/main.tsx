import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Monsters from "./pages/Monsters";
import AddMonster from "./pages/AddMonster";
import Monster from "./pages/Monster";
import Nav from "./pages/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,    
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home/>,
      },      
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/monsters",
        element: <Monsters />,
        children: [
          {
            path: "/monsters/:monstersId",
            element: <Monster />,
          },
        ],
      },
      {
        path: "/addmonster",
        element: <AddMonster />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
