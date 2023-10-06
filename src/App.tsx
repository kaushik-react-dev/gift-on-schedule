import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/details";
import "./styles/style.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Details />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    // <div className="App">
    //   <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
