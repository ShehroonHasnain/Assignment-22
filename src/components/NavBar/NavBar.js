import { useSelector } from "react-redux"
import "./NavBar.css"
import {BrowserRouter, Link} from "react-router-dom";


export default function Navabr() {
  const  allProducts=useSelector(state=>state.productSlice.products)
  const count=allProducts.length
  return (
    <div>
        <nav className="navbar">
    <div className="logo">MyWebsite</div>
    <ul className="nav-links">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/products' href="#products">Products({count})</Link></li>
      <li><Link to='/contact' href="#about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
  </div>
  )
}
