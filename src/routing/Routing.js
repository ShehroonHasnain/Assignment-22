import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Products/Product";
import Addproduct from "../components/AddProduct/Addproduct";
 
  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/products",
      element: <Product/>,
    },
    {
        path:"/AddProduct",
        element:<Addproduct/>
    }
    
  
  ]);
  
  export default function Routing(params) {
    return (
      <RouterProvider router={router} />
    )
  }