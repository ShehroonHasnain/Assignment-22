import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Product from "../pages/Products/Product";
import Addproduct from "../components/AddProduct/Addproduct";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer/Footer";
 
  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/products",
      element: <ProductList/>,
    },
    {
        path:"/AddProduct",
        element:<Addproduct/>
    },
    {
      path:"/contact",
      element:<Footer/>
    }
    
  
  ]);
  
  export default function Routing(params) {
    return (
      <RouterProvider router={router} />
    )
  }