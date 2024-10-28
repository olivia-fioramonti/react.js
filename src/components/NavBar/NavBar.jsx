import  "./navbar.css";
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
   const styleH2 = { fontSize: "30px" }
   
   return(
        <nav className= "navbar" >
            <h2 style= { styleH2 } > Customized Clothing</h2>

            <ul className="categories" >
                <li className="category"> 
                 <Link to="/category/Camperas">    Camperas de Jean  </Link> 
                </li> 
                <li className="category"> 
                 <Link to="/category/Pantalones" >   Pantalones  </Link>
                </li>
                <li className="category" >
                 <Link to="/category/Accesorios" >   Accesorios  </Link>
                </li>
            </ul>

            <Link to="/" className="brand primary-font-color"  >
             <p className="tittle-brand" > Scorpion Art Place </p>
          
            </Link> 
            
            <CartWidget />
        </nav>
    )
}

export default NavBar