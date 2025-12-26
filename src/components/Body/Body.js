import { createBrowserRouter, RouterProvider } from "react-router";
import Browser from "../Browse/Browse";
import Login from "../Login/Login";

const Body = () => {
   
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browser",
        element: <Browser />,
      },
    ]);
    
  return ( 
  <div>
    <RouterProvider router={appRouter}/>
  </div>
)};

export default Body;
