import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Adduser from "./Component/Adduser";
import Home from "./Component/Home";
import Update from "./Component/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("https://mongo-server-practice.vercel.app/user"),
    },
    {
      path: "/user",
      element: <Adduser></Adduser>,
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) =>
        fetch(`https://mongo-server-practice.vercel.app/user/${params.id}`),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
