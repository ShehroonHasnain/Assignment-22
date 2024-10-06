import "./NavBar.css"


export default function Navabr() {
  return (
    <div>
        <nav className="navbar">
    <div className="logo">MyWebsite</div>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
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
